--- 
title: labeling_jobs_for_workteams
hide_title: false
hide_table_of_contents: false
keywords:
  - labeling_jobs_for_workteams
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>labeling_jobs_for_workteams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="labeling_jobs_for_workteams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.labeling_jobs_for_workteams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_labeling_jobs_for_workteam"
    values={[
        { label: 'list_labeling_jobs_for_workteam', value: 'list_labeling_jobs_for_workteam' }
    ]}
>
<TabItem value="list_labeling_jobs_for_workteam">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the labeling job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="JobReferenceCode" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a labeling job. You can use this to refer to a specific labeling job. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelCounters" /></td>
    <td><code>object</code></td>
    <td>Provides information about the progress of a labeling job.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelingJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the labeling job that the work team is assigned to. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfHumanWorkersPerDataObject" /></td>
    <td><code>integer</code></td>
    <td>The configured number of workers per data object.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkRequesterAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the account used to start the labeling job. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
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
    <td><a href="#list_labeling_jobs_for_workteam"><CopyableCode code="list_labeling_jobs_for_workteam" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of labeling jobs assigned to a specified work team.</td>
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
    defaultValue="list_labeling_jobs_for_workteam"
    values={[
        { label: 'list_labeling_jobs_for_workteam', value: 'list_labeling_jobs_for_workteam' }
    ]}
>
<TabItem value="list_labeling_jobs_for_workteam">

Gets a list of labeling jobs assigned to a specified work team.

```sql
SELECT
CreationTime,
JobReferenceCode,
LabelCounters,
LabelingJobName,
NumberOfHumanWorkersPerDataObject,
WorkRequesterAccountId
FROM aws.sagemaker.labeling_jobs_for_workteams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
