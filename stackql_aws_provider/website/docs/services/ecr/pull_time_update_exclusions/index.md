--- 
title: pull_time_update_exclusions
hide_title: false
hide_table_of_contents: false
keywords:
  - pull_time_update_exclusions
  - ecr
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

Creates, updates, deletes, gets or lists a <code>pull_time_update_exclusions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pull_time_update_exclusions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.pull_time_update_exclusions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pull_time_update_exclusions"
    values={[
        { label: 'list_pull_time_update_exclusions', value: 'list_pull_time_update_exclusions' }
    ]}
>
<TabItem value="list_pull_time_update_exclusions">

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
    <td><CopyableCode code="pull_time_update_exclusion" /></td>
    <td><code>string</code></td>
    <td>The list of IAM principal ARNs that are excluded from having their image pull times recorded.</td>
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
    <td><a href="#list_pull_time_update_exclusions"><CopyableCode code="list_pull_time_update_exclusions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the IAM principals that are excluded from having their image pull times recorded.</td>
</tr>
<tr>
    <td><a href="#register_pull_time_update_exclusion"><CopyableCode code="register_pull_time_update_exclusion" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-principalArn"><code>principalArn</code></a></td>
    <td></td>
    <td>Adds an IAM principal to the pull time update exclusion list for a registry. Amazon ECR will not record the pull time if an excluded principal pulls an image.</td>
</tr>
<tr>
    <td><a href="#deregister_pull_time_update_exclusion"><CopyableCode code="deregister_pull_time_update_exclusion" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a principal from the pull time update exclusion list for a registry. Once removed, Amazon ECR will resume updating the pull time if the specified principal pulls an image.</td>
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
    defaultValue="list_pull_time_update_exclusions"
    values={[
        { label: 'list_pull_time_update_exclusions', value: 'list_pull_time_update_exclusions' }
    ]}
>
<TabItem value="list_pull_time_update_exclusions">

Lists the IAM principals that are excluded from having their image pull times recorded.

```sql
SELECT
pull_time_update_exclusion
FROM aws.ecr.pull_time_update_exclusions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_pull_time_update_exclusion"
    values={[
        { label: 'register_pull_time_update_exclusion', value: 'register_pull_time_update_exclusion' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_pull_time_update_exclusion">

Adds an IAM principal to the pull time update exclusion list for a registry. Amazon ECR will not record the pull time if an excluded principal pulls an image.

```sql
INSERT INTO aws.ecr.pull_time_update_exclusions (
principalArn,
region
)
SELECT 
'{{ principalArn }}' /* required */,
'{{ region }}'
RETURNING
createdAt,
principalArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pull_time_update_exclusions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pull_time_update_exclusions resource.
    - name: principalArn
      value: "{{ principalArn }}"
      description: |
        The ARN of the IAM principal to exclude from having image pull times recorded.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_pull_time_update_exclusion"
    values={[
        { label: 'deregister_pull_time_update_exclusion', value: 'deregister_pull_time_update_exclusion' }
    ]}
>
<TabItem value="deregister_pull_time_update_exclusion">

Removes a principal from the pull time update exclusion list for a registry. Once removed, Amazon ECR will resume updating the pull time if the specified principal pulls an image.

```sql
DELETE FROM aws.ecr.pull_time_update_exclusions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
