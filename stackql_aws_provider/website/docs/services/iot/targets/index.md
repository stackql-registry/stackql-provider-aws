--- 
title: targets
hide_title: false
hide_table_of_contents: false
keywords:
  - targets
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

Creates, updates, deletes, gets or lists a <code>targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_targets_for_security_profile"
    values={[
        { label: 'list_targets_for_security_profile', value: 'list_targets_for_security_profile' },
        { label: 'list_targets_for_policy', value: 'list_targets_for_policy' }
    ]}
>
<TabItem value="list_targets_for_security_profile">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the security profile.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_targets_for_policy">

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
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The policy targets.</td>
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
    <td><a href="#list_targets_for_security_profile"><CopyableCode code="list_targets_for_security_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-security_profile_name"><code>security_profile_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability. Lists the targets (thing groups) associated with a given Device Defender security profile. Requires permission to access the ListTargetsForSecurityProfile action.</td>
</tr>
<tr>
    <td><a href="#list_targets_for_policy"><CopyableCode code="list_targets_for_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>List targets for the specified policy. Requires permission to access the ListTargetsForPolicy action.</td>
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
<tr id="parameter-policy_name">
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The policy name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-security_profile_name">
    <td><CopyableCode code="security_profile_name" /></td>
    <td><code>string</code></td>
    <td>The security profile.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>A marker used to get the next set of results.</td>
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
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_targets_for_security_profile"
    values={[
        { label: 'list_targets_for_security_profile', value: 'list_targets_for_security_profile' },
        { label: 'list_targets_for_policy', value: 'list_targets_for_policy' }
    ]}
>
<TabItem value="list_targets_for_security_profile">

The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability. Lists the targets (thing groups) associated with a given Device Defender security profile. Requires permission to access the ListTargetsForSecurityProfile action.

```sql
SELECT
arn
FROM aws.iot.targets
WHERE security_profile_name = '{{ security_profile_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="list_targets_for_policy">

List targets for the specified policy. Requires permission to access the ListTargetsForPolicy action.

```sql
SELECT
target
FROM aws.iot.targets
WHERE policy_name = '{{ policy_name }}' -- required
AND region = '{{ region }}' -- required
AND marker = '{{ marker }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>
