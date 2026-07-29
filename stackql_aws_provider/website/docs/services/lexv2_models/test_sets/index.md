--- 
title: test_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - test_sets
  - lexv2_models
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

Creates, updates, deletes, gets or lists a <code>test_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.test_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_test_set"
    values={[
        { label: 'describe_test_set', value: 'describe_test_set' },
        { label: 'list_test_sets', value: 'list_test_sets' }
    ]}
>
<TabItem value="describe_test_set">

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
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time for the test set data.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the test set.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time for the last update of the test set data.</td>
</tr>
<tr>
    <td><CopyableCode code="modality" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the test set is audio or text data. (Text, Audio)</td>
</tr>
<tr>
    <td><CopyableCode code="num_turns" /></td>
    <td><code>integer</code></td>
    <td>The total number of agent and user turn in the test set.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The roleARN used for any operation in the test set to access resources in the Amazon Web Services account. (pattern: &lt;code&gt;^arn:aws:iam::&#91;0-9&#93;&#123;12&#125;:role/.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the test set. (Importing, PendingAnnotation, Deleting, ValidationError, Ready)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_location" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 storage location for the test set data.</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_id" /></td>
    <td><code>string</code></td>
    <td>The test set Id for the test set response. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_name" /></td>
    <td><code>string</code></td>
    <td>The test set name of the test set. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_test_sets">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListTestSets operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListTestSets operation request to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="test_sets" /></td>
    <td><code>array</code></td>
    <td>The selected test sets in a list of test sets.</td>
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
    <td><a href="#describe_test_set"><CopyableCode code="describe_test_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_set_id"><code>test_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets metadata information about the test set.</td>
</tr>
<tr>
    <td><a href="#list_test_sets"><CopyableCode code="list_test_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The list of the test sets</td>
</tr>
<tr>
    <td><a href="#update_test_set"><CopyableCode code="update_test_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-test_set_id"><code>test_set_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-testSetName"><code>testSetName</code></a></td>
    <td></td>
    <td>The action to update the test set.</td>
</tr>
<tr>
    <td><a href="#delete_test_set"><CopyableCode code="delete_test_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-test_set_id"><code>test_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The action to delete the selected test set.</td>
</tr>
<tr>
    <td><a href="#start_test_execution"><CopyableCode code="start_test_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-test_set_id"><code>test_set_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-target"><code>target</code></a>, <a href="#parameter-apiMode"><code>apiMode</code></a></td>
    <td></td>
    <td>The action to start test set execution.</td>
</tr>
<tr>
    <td><a href="#start_test_set_generation"><CopyableCode code="start_test_set_generation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-testSetName"><code>testSetName</code></a>, <a href="#parameter-storageLocation"><code>storageLocation</code></a>, <a href="#parameter-generationDataSource"><code>generationDataSource</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>The action to start the generation of test set.</td>
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
<tr id="parameter-test_set_id">
    <td><CopyableCode code="test_set_id" /></td>
    <td><code>string</code></td>
    <td>The test set Id for the test set execution.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_test_set"
    values={[
        { label: 'describe_test_set', value: 'describe_test_set' },
        { label: 'list_test_sets', value: 'list_test_sets' }
    ]}
>
<TabItem value="describe_test_set">

Gets metadata information about the test set.

```sql
SELECT
creation_date_time,
description,
last_updated_date_time,
modality,
num_turns,
role_arn,
status,
storage_location,
test_set_id,
test_set_name
FROM aws.lexv2_models.test_sets
WHERE test_set_id = '{{ test_set_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_test_sets">

The list of the test sets

```sql
SELECT
next_token,
test_sets
FROM aws.lexv2_models.test_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_test_set"
    values={[
        { label: 'update_test_set', value: 'update_test_set' }
    ]}
>
<TabItem value="update_test_set">

The action to update the test set.

```sql
UPDATE aws.lexv2_models.test_sets
SET 
testSetName = '{{ testSetName }}',
description = '{{ description }}'
WHERE 
test_set_id = '{{ test_set_id }}' --required
AND region = '{{ region }}' --required
AND testSetName = '{{ testSetName }}' --required
RETURNING
creation_date_time,
description,
last_updated_date_time,
modality,
num_turns,
role_arn,
status,
storage_location,
test_set_id,
test_set_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_test_set"
    values={[
        { label: 'delete_test_set', value: 'delete_test_set' }
    ]}
>
<TabItem value="delete_test_set">

The action to delete the selected test set.

```sql
DELETE FROM aws.lexv2_models.test_sets
WHERE test_set_id = '{{ test_set_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_test_execution"
    values={[
        { label: 'start_test_execution', value: 'start_test_execution' },
        { label: 'start_test_set_generation', value: 'start_test_set_generation' }
    ]}
>
<TabItem value="start_test_execution">

The action to start test set execution.

```sql
EXEC aws.lexv2_models.test_sets.start_test_execution 
@test_set_id='{{ test_set_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"target": "{{ target }}", 
"apiMode": "{{ apiMode }}", 
"testExecutionModality": "{{ testExecutionModality }}"
}'
;
```
</TabItem>
<TabItem value="start_test_set_generation">

The action to start the generation of test set.

```sql
EXEC aws.lexv2_models.test_sets.start_test_set_generation 
@region='{{ region }}' --required 
@@json=
'{
"testSetName": "{{ testSetName }}", 
"description": "{{ description }}", 
"storageLocation": "{{ storageLocation }}", 
"generationDataSource": "{{ generationDataSource }}", 
"roleArn": "{{ roleArn }}", 
"testSetTags": "{{ testSetTags }}"
}'
;
```
</TabItem>
</Tabs>
