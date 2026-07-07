--- 
title: topics
hide_title: false
hide_table_of_contents: false
keywords:
  - topics
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

Creates, updates, deletes, gets or lists a <code>topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_topic"
    values={[
        { label: 'describe_topic', value: 'describe_topic' },
        { label: 'search_topics', value: 'search_topics' },
        { label: 'list_topics', value: 'list_topics' }
    ]}
>
<TabItem value="describe_topic">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomInstructions" /></td>
    <td><code>object</code></td>
    <td>Instructions that provide additional guidance and context for response generation.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="Topic" /></td>
    <td><code>object</code></td>
    <td>A structure that describes the details of a topic, such as its name, description, and associated data sets.</td>
</tr>
<tr>
    <td><CopyableCode code="TopicId" /></td>
    <td><code>string</code></td>
    <td>The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: &lt;code&gt;^&#91;A-Za-z0-9-_.\\+&#93;*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_topics">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="TopicId" /></td>
    <td><code>string</code></td>
    <td>The ID for the topic. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: &lt;code&gt;^&#91;A-Za-z0-9-_.\\+&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UserExperienceVersion" /></td>
    <td><code>string</code></td>
    <td>The user experience version of the topic. (LEGACY, NEW_READER_EXPERIENCE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_topics">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="TopicsSummaries" /></td>
    <td><code>array</code></td>
    <td>A list of topic summaries.</td>
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
    <td><a href="#describe_topic"><CopyableCode code="describe_topic" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a topic.</td>
</tr>
<tr>
    <td><a href="#search_topics"><CopyableCode code="search_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for any Q topic that exists in an Quick account.</td>
</tr>
<tr>
    <td><a href="#list_topics"><CopyableCode code="list_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all of the topics within an account.</td>
</tr>
<tr>
    <td><a href="#create_topic"><CopyableCode code="create_topic" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TopicId"><code>TopicId</code></a></td>
    <td></td>
    <td>Creates a new Q topic.</td>
</tr>
<tr>
    <td><a href="#update_topic"><CopyableCode code="update_topic" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a topic.</td>
</tr>
<tr>
    <td><a href="#delete_topic"><CopyableCode code="delete_topic" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a topic.</td>
</tr>
<tr>
    <td><a href="#batch_create_topic_reviewed_answer"><CopyableCode code="batch_create_topic_reviewed_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Answers"><code>Answers</code></a></td>
    <td></td>
    <td>Creates new reviewed answers for a Q Topic.</td>
</tr>
<tr>
    <td><a href="#batch_delete_topic_reviewed_answer"><CopyableCode code="batch_delete_topic_reviewed_answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes reviewed answers for Q Topic.</td>
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
    <td>The ID of the Amazon Web Services account that you want to delete a reviewed answers in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-topic_id">
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the topic reviewed answer that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_topic"
    values={[
        { label: 'describe_topic', value: 'describe_topic' },
        { label: 'search_topics', value: 'search_topics' },
        { label: 'list_topics', value: 'list_topics' }
    ]}
>
<TabItem value="describe_topic">

Describes a topic.

```sql
SELECT
Arn,
CustomInstructions,
RequestId,
Status,
Topic,
TopicId
FROM aws.quicksight.topics
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND topic_id = '{{ topic_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_topics">

Searches for any Q topic that exists in an Quick account.

```sql
SELECT
Arn,
Name,
TopicId,
UserExperienceVersion
FROM aws.quicksight.topics
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_topics">

Lists all of the topics within an account.

```sql
SELECT
NextToken,
RequestId,
Status,
TopicsSummaries
FROM aws.quicksight.topics
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_topic"
    values={[
        { label: 'create_topic', value: 'create_topic' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_topic">

Creates a new Q topic.

```sql
INSERT INTO aws.quicksight.topics (
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
Arn,
RefreshArn,
RequestId,
Status,
TopicId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: topics
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the topics resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the topics resource.
    - name: TopicId
      value: "{{ TopicId }}"
    - name: Topic
      description: |
        A structure that describes the details of a topic, such as its name, description, and associated data sets.
      value:
        Name: "{{ Name }}"
        Description: "{{ Description }}"
        UserExperienceVersion: "{{ UserExperienceVersion }}"
        DataSets:
          - DatasetArn: "{{ DatasetArn }}"
            DatasetName: "{{ DatasetName }}"
            DatasetDescription: "{{ DatasetDescription }}"
            DataAggregation:
              DatasetRowDateGranularity: "{{ DatasetRowDateGranularity }}"
              DefaultDateColumnName: "{{ DefaultDateColumnName }}"
            Filters: "{{ Filters }}"
            Columns: "{{ Columns }}"
            CalculatedFields: "{{ CalculatedFields }}"
            NamedEntities: "{{ NamedEntities }}"
        ConfigOptions:
          QBusinessInsightsEnabled: {{ QBusinessInsightsEnabled }}
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
    defaultValue="update_topic"
    values={[
        { label: 'update_topic', value: 'update_topic' }
    ]}
>
<TabItem value="update_topic">

Updates a topic.

```sql
UPDATE aws.quicksight.topics
SET 
Topic = '{{ Topic }}',
CustomInstructions = '{{ CustomInstructions }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND topic_id = '{{ topic_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
RefreshArn,
RequestId,
Status,
TopicId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_topic"
    values={[
        { label: 'delete_topic', value: 'delete_topic' }
    ]}
>
<TabItem value="delete_topic">

Deletes a topic.

```sql
DELETE FROM aws.quicksight.topics
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND topic_id = '{{ topic_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_topic_reviewed_answer"
    values={[
        { label: 'batch_create_topic_reviewed_answer', value: 'batch_create_topic_reviewed_answer' },
        { label: 'batch_delete_topic_reviewed_answer', value: 'batch_delete_topic_reviewed_answer' }
    ]}
>
<TabItem value="batch_create_topic_reviewed_answer">

Creates new reviewed answers for a Q Topic.

```sql
EXEC aws.quicksight.topics.batch_create_topic_reviewed_answer 
@aws_account_id='{{ aws_account_id }}' --required, 
@topic_id='{{ topic_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Answers": "{{ Answers }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_topic_reviewed_answer">

Deletes reviewed answers for Q Topic.

```sql
EXEC aws.quicksight.topics.batch_delete_topic_reviewed_answer 
@aws_account_id='{{ aws_account_id }}' --required, 
@topic_id='{{ topic_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AnswerIds": "{{ AnswerIds }}"
}'
;
```
</TabItem>
</Tabs>
