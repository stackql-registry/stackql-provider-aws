--- 
title: qualification_scores
hide_title: false
hide_table_of_contents: false
keywords:
  - qualification_scores
  - mturk
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

Creates, updates, deletes, gets or lists a <code>qualification_scores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="qualification_scores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.qualification_scores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_qualification_score"
    values={[
        { label: 'get_qualification_score', value: 'get_qualification_score' }
    ]}
>
<TabItem value="get_qualification_score">

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
    <td><CopyableCode code="GrantTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Qualification was granted to the Worker. If the Worker's Qualification was revoked, and then re-granted based on a new Qualification request, GrantTime is the date and time of the last call to the AcceptQualificationRequest operation.</td>
</tr>
<tr>
    <td><CopyableCode code="IntegerValue" /></td>
    <td><code>integer</code></td>
    <td>The value (score) of the Qualification, if the Qualification has an integer value.</td>
</tr>
<tr>
    <td><CopyableCode code="LocaleValue" /></td>
    <td><code>object</code></td>
    <td>The Locale data structure represents a geographical region or location.</td>
</tr>
<tr>
    <td><CopyableCode code="QualificationTypeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Qualification type for the Qualification. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the Qualification. Valid values are Granted | Revoked. (Granted, Revoked)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Worker who possesses the Qualification. (pattern: &lt;code&gt;^A&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_qualification_score"><CopyableCode code="get_qualification_score" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The GetQualificationScore operation returns the value of a Worker's Qualification for a given Qualification type. To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the ListAssignmentsForHIT operation. Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_qualification_score"
    values={[
        { label: 'get_qualification_score', value: 'get_qualification_score' }
    ]}
>
<TabItem value="get_qualification_score">

The GetQualificationScore operation returns the value of a Worker's Qualification for a given Qualification type. To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the ListAssignmentsForHIT operation. Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.

```sql
SELECT
GrantTime,
IntegerValue,
LocaleValue,
QualificationTypeId,
Status,
WorkerId
FROM aws.mturk.qualification_scores
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
