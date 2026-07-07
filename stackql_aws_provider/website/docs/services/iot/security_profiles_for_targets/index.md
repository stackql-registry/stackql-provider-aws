--- 
title: security_profiles_for_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - security_profiles_for_targets
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

Creates, updates, deletes, gets or lists a <code>security_profiles_for_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_profiles_for_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.security_profiles_for_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_security_profiles_for_target"
    values={[
        { label: 'list_security_profiles_for_target', value: 'list_security_profiles_for_target' }
    ]}
>
<TabItem value="list_security_profiles_for_target">

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
    <td><CopyableCode code="securityProfileIdentifier" /></td>
    <td><code>object</code></td>
    <td>Identifying information for a Device Defender security profile.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>A target to which an alert is sent when a security profile behavior is violated.</td>
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
    <td><a href="#list_security_profiles_for_target"><CopyableCode code="list_security_profiles_for_target" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-securityProfileTargetArn"><code>securityProfileTargetArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-recursive"><code>recursive</code></a></td>
    <td>Lists the Device Defender security profiles attached to a target (thing group). Requires permission to access the ListSecurityProfilesForTarget action.</td>
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
<tr id="parameter-securityProfileTargetArn">
    <td><CopyableCode code="securityProfileTargetArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the target (thing group) whose attached security profiles you want to get.</td>
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
<tr id="parameter-recursive">
    <td><CopyableCode code="recursive" /></td>
    <td><code>boolean</code></td>
    <td>If true, return child groups too.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_security_profiles_for_target"
    values={[
        { label: 'list_security_profiles_for_target', value: 'list_security_profiles_for_target' }
    ]}
>
<TabItem value="list_security_profiles_for_target">

Lists the Device Defender security profiles attached to a target (thing group). Requires permission to access the ListSecurityProfilesForTarget action.

```sql
SELECT
securityProfileIdentifier,
target
FROM aws.iot.security_profiles_for_targets
WHERE securityProfileTargetArn = '{{ securityProfileTargetArn }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND recursive = '{{ recursive }}'
;
```
</TabItem>
</Tabs>
