--- 
title: attached_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - attached_policies
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

Creates, updates, deletes, gets or lists an <code>attached_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attached_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.attached_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_attached_policies"
    values={[
        { label: 'list_attached_policies', value: 'list_attached_policies' }
    ]}
>
<TabItem value="list_attached_policies">

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
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>The policy ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="policyName" /></td>
    <td><code>string</code></td>
    <td>The policy name. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_attached_policies"><CopyableCode code="list_attached_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-target"><code>target</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-recursive"><code>recursive</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists the policies attached to the specified thing group. Requires permission to access the ListAttachedPolicies action.</td>
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
<tr id="parameter-target">
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The group or principal for which the policies will be listed. Valid principals are CertificateArn (arn:aws:iot:region:accountId:cert/certificateId), thingGroupArn (arn:aws:iot:region:accountId:thinggroup/groupName) and CognitoId (region:id).</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next set of results.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-recursive">
    <td><CopyableCode code="recursive" /></td>
    <td><code>boolean</code></td>
    <td>When true, recursively list attached policies.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_attached_policies"
    values={[
        { label: 'list_attached_policies', value: 'list_attached_policies' }
    ]}
>
<TabItem value="list_attached_policies">

Lists the policies attached to the specified thing group. Requires permission to access the ListAttachedPolicies action.

```sql
SELECT
policyArn,
policyName
FROM aws.iot.attached_policies
WHERE target = '{{ target }}' -- required
AND region = '{{ region }}' -- required
AND recursive = '{{ recursive }}'
AND marker = '{{ marker }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>
