--- 
title: topic_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_v2s
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>topic_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.topic_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_topic_v2"
    values={[
        { label: 'describe_topic_v2', value: 'describe_topic_v2' }
    ]}
>
<TabItem value="describe_topic_v2">

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
    <td>The Amazon Resource Name (ARN) of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_instructions" /></td>
    <td><code>object</code></td>
    <td>Instructions that provide additional guidance and context for response generation.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="topic" /></td>
    <td><code>object</code></td>
    <td>The definition of a topic.</td>
</tr>
<tr>
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: &lt;code&gt;^&#91;A-Za-z0-9-_.\\+&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#describe_topic_v2"><CopyableCode code="describe_topic_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a Q topic.</td>
</tr>
<tr>
    <td><a href="#create_topic_v2"><CopyableCode code="create_topic_v2" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TopicId"><code>TopicId</code></a></td>
    <td></td>
    <td>Creates a new Q topic.</td>
</tr>
<tr>
    <td><a href="#update_topic_v2"><CopyableCode code="update_topic_v2" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the definition of a Q topic.</td>
</tr>
<tr>
    <td><a href="#delete_topic_v2"><CopyableCode code="delete_topic_v2" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Q topic.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the topic that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-topic_id">
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_topic_v2"
    values={[
        { label: 'describe_topic_v2', value: 'describe_topic_v2' }
    ]}
>
<TabItem value="describe_topic_v2">

Describes a Q topic.

```sql
SELECT
arn,
custom_instructions,
request_id,
status,
topic,
topic_id
FROM aws.quicksight.topic_v2s
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND topic_id = '{{ topic_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_topic_v2"
    values={[
        { label: 'create_topic_v2', value: 'create_topic_v2' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_topic_v2">

Creates a new Q topic.

```sql
INSERT INTO aws.quicksight.topic_v2s (
TopicId,
Topic,
Tags,
FolderArns,
CustomInstructions,
aws_account_id,
region
)
SELECT 
'{{ TopicId }}' /* required */,
'{{ Topic }}',
'{{ Tags }}',
'{{ FolderArns }}',
'{{ CustomInstructions }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
arn,
request_id,
status,
topic_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: topic_v2s
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the topic_v2s resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the topic_v2s resource.
    - name: TopicId
      value: "{{ TopicId }}"
    - name: Topic
      description: |
        The definition of a topic.
      value:
        Name: "{{ Name }}"
        Description: "{{ Description }}"
        DataSets:
          - DataSetArn: "{{ DataSetArn }}"
            DataSetName: "{{ DataSetName }}"
        DataSetRelations:
          - Left:
              DataSetArn: "{{ DataSetArn }}"
              ColumnNames:
                - "{{ ColumnNames }}"
            Right:
              DataSetArn: "{{ DataSetArn }}"
              ColumnNames:
                - "{{ ColumnNames }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: FolderArns
      value:
        - "{{ FolderArns }}"
    - name: CustomInstructions
      description: |
        Instructions that provide additional guidance and context for response generation.
      value:
        CustomInstructionsString: "{{ CustomInstructionsString }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_topic_v2"
    values={[
        { label: 'update_topic_v2', value: 'update_topic_v2' }
    ]}
>
<TabItem value="update_topic_v2">

Updates the definition of a Q topic.

```sql
UPDATE aws.quicksight.topic_v2s
SET 
Topic = '{{ Topic }}',
CustomInstructions = '{{ CustomInstructions }}',
PublishOption = '{{ PublishOption }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND topic_id = '{{ topic_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
request_id,
status,
topic_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_topic_v2"
    values={[
        { label: 'delete_topic_v2', value: 'delete_topic_v2' }
    ]}
>
<TabItem value="delete_topic_v2">

Deletes a Q topic.

```sql
DELETE FROM aws.quicksight.topic_v2s
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND topic_id = '{{ topic_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
