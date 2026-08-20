--- 
title: resolved_test_run_target_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resolved_test_run_target_resources
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>resolved_test_run_target_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolved_test_run_target_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.resolved_test_run_target_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resolved_test_run_target_resources"
    values={[
        { label: 'list_resolved_test_run_target_resources', value: 'list_resolved_test_run_target_resources' }
    ]}
>
<TabItem value="list_resolved_test_run_target_resources">

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
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The AWS FIS resource type the target belongs to, such as aws:ec2:instance, aws:ecs:task, or aws:eks:pod.</td>
</tr>
<tr>
    <td><CopyableCode code="target_information" /></td>
    <td><code>object</code></td>
    <td>The raw target information map as returned by AWS FIS.</td>
</tr>
<tr>
    <td><CopyableCode code="target_name" /></td>
    <td><code>string</code></td>
    <td>The name of the target in the AWS FIS experiment template.</td>
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
    <td><a href="#list_resolved_test_run_target_resources"><CopyableCode code="list_resolved_test_run_target_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_run_id"><code>test_run_id</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the AWS resources that AWS Fault Injection Service (AWS FIS) resolved as targets for a test run.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the service the test run belongs to.</td>
</tr>
<tr id="parameter-test_run_id">
    <td><CopyableCode code="test_run_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test run to list resolved target resources for.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resolved_test_run_target_resources"
    values={[
        { label: 'list_resolved_test_run_target_resources', value: 'list_resolved_test_run_target_resources' }
    ]}
>
<TabItem value="list_resolved_test_run_target_resources">

Lists the AWS resources that AWS Fault Injection Service (AWS FIS) resolved as targets for a test run.

```sql
SELECT
resource_type,
target_information,
target_name
FROM aws.resiliencehubv2.resolved_test_run_target_resources
WHERE test_run_id = '{{ test_run_id }}' -- required
AND serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
