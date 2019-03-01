<?php

function validate($subj, $checks) {
  if (isset($checks[0])) {
    for ($i=0; $i<sizeof($checks); $i++)
      if ($err=validate($subj,$checks[$i])) return $err;
  }
  elseif (gettype($subj)=='array') {
    if (isset($subj[0])) {
      if (isset($checks['sub'])) {
        $sub=$checks['sub'];
        if ($err=validate($subj[$sub-1],$checks))
          return array($sub, $err);
      }
      else {
        for ($i=0; $i<sizeof($subj); $i++)
          if ($err=validate($subj[$i],$checks))
            return array($i+1, $err);
      }
    }
    else {
      if (isset($checks['sub'])) {
        $sub=$checks['sub'];
        if ($err=validate($subj[$sub],$checks))
          return array($sub, $err);
      }
      else {
        foreach ($subj as $key=>$value)
          if ($err=validate($value,$checks))
            return array($key, $err);
      }
    }
  }
  else {
    $is = isset($checks['is'])? $checks['is'] :0;
    $not = isset($checks['not'])? $checks['not'] :0;
    $err = $checks['err'];
    if ($is && preg_match($is, $subj) or
        $not && !preg_match($not, $subj)) return $err;
  }
};

?>