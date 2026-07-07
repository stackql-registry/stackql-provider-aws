--- 
title: active_violations
hide_title: false
hide_table_of_contents: false
keywords:
  - active_violations
  - iot
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>active_violations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="active_violations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.active_violations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_active_violations"
    values={[
        { label: 'list_active_violations', value: 'list_active_violations' }
    ]}
>
<TabItem value="list_active_violations">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="behavior" /></td>
    <td><code>object</code></td>
    <td>A Device Defender security profile behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="lastViolationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the most recent violation occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="lastViolationValue" /></td>
    <td><code>object</code></td>
    <td>The value of the metric (the measurement) that caused the most recent violation.</td>
</tr>
<tr>
    <td><CopyableCode code="securityProfileName" /></td>
    <td><code>string</code></td>
    <td>The security profile with the behavior is in violation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="thingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing responsible for the active violation.</td>
</tr>
<tr>
    <td><CopyableCode code="verificationState" /></td>
    <td><code>string</code></td>
    <td>The verification state of the violation (detect alarm). (FALSE_POSITIVE, BENIGN_POSITIVE, TRUE_POSITIVE, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="verificationStateDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the verification state of the violation. (pattern: &lt;code&gt;&#91;^\p&#123;Cntrl&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="violationEventAdditionalInfo" /></td>
    <td><code>object</code></td>
    <td>The details of a violation event.</td>
</tr>
<tr>
    <td><CopyableCode code="violationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the active violation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="violationStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the violation started.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#list_active_violations"><CopyableCode code="list_active_violations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-thingName"><code>thingName</code></a>, <a href="#parameter-securityProfileName"><code>securityProfileName</code></a>, <a href="#parameter-behaviorCriteriaType"><code>behaviorCriteriaType</code></a>, <a href="#parameter-listSuppressedAlerts"><code>listSuppressedAlerts</code></a>, <a href="#parameter-verificationState"><code>verificationState</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the active violations for a given Device Defender security profile. Requires permission to access the ListActiveViolations action.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-behaviorCriteriaType">
    <td><CopyableCode code="behaviorCriteriaType" /></td>
    <td><code>string</code></td>
    <td>The criteria for a behavior.</td>
</tr>
<tr id="parameter-listSuppressedAlerts">
    <td><CopyableCode code="listSuppressedAlerts" /></td>
    <td><code>boolean</code></td>
    <td>A list of all suppressed alerts.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
<tr id="parameter-securityProfileName">
    <td><CopyableCode code="securityProfileName" /></td>
    <td><code>string</code></td>
    <td>The name of the Device Defender security profile for which violations are listed.</td>
</tr>
<tr id="parameter-thingName">
    <td><CopyableCode code="thingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing whose active violations are listed.</td>
</tr>
<tr id="parameter-verificationState">
    <td><CopyableCode code="verificationState" /></td>
    <td><code>string</code></td>
    <td>The verification state of the violation (detect alarm).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_active_violations"
    values={[
        { label: 'list_active_violations', value: 'list_active_violations' }
    ]}
>
<TabItem value="list_active_violations">

Lists the active violations for a given Device Defender security profile. Requires permission to access the ListActiveViolations action.

```sql
SELECT
behavior,
lastViolationTime,
lastViolationValue,
securityProfileName,
thingName,
verificationState,
verificationStateDescription,
violationEventAdditionalInfo,
violationId,
violationStartTime
FROM aws.iot.active_violations
WHERE region = '{{ region }}' -- required
AND thingName = '{{ thingName }}'
AND securityProfileName = '{{ securityProfileName }}'
AND behaviorCriteriaType = '{{ behaviorCriteriaType }}'
AND listSuppressedAlerts = '{{ listSuppressedAlerts }}'
AND verificationState = '{{ verificationState }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
