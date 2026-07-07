--- 
title: query_suggestions_block_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - query_suggestions_block_lists
  - kendra
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

Creates, updates, deletes, gets or lists a <code>query_suggestions_block_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_suggestions_block_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.query_suggestions_block_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_query_suggestions_block_list"
    values={[
        { label: 'describe_query_suggestions_block_list', value: 'describe_query_suggestions_block_list' }
    ]}
>
<TabItem value="describe_query_suggestions_block_list">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when a block list for query suggestions was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the block list. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>The error message containing details if there are issues processing the block list. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FileSizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The current size of the block list text file in S3.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the block list. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IndexId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the index for the block list. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ItemCount" /></td>
    <td><code>integer</code></td>
    <td>The current number of valid, non-empty words or phrases in the block list text file.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the block list. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM (Identity and Access Management) role used by Amazon Kendra to access the block list text file in S3. The role needs S3 read permissions to your file in S3 and needs to give STS (Security Token Service) assume role permissions to Amazon Kendra. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceS3Path" /></td>
    <td><code>object</code></td>
    <td>Information required to find a specific file in an Amazon S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the block list. When the value is ACTIVE, the block list is ready for use. (ACTIVE, CREATING, DELETING, UPDATING, ACTIVE_BUT_UPDATE_FAILED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when a block list for query suggestions was last updated.</td>
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
    <td><a href="#describe_query_suggestions_block_list"><CopyableCode code="describe_query_suggestions_block_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a block list used for query suggestions for an index. This is used to check the current settings that are applied to a block list. DescribeQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
</tr>
<tr>
    <td><a href="#create_query_suggestions_block_list"><CopyableCode code="create_query_suggestions_block_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-SourceS3Path"><code>SourceS3Path</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a block list to exlcude certain queries from suggestions. Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion. You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line. For information on the current quota limits for block lists, see Quotas for Amazon Kendra. CreateQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region. For an example of creating a block list for query suggestions using the Python SDK, see Query suggestions block list.</td>
</tr>
<tr>
    <td><a href="#update_query_suggestions_block_list"><CopyableCode code="update_query_suggestions_block_list" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Updates a block list used for query suggestions for an index. Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately. If a block list is updating, then you need to wait for the first update to finish before submitting another update. Amazon Kendra supports partial updates, so you only need to provide the fields you want to update. UpdateQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
</tr>
<tr>
    <td><a href="#delete_query_suggestions_block_list"><CopyableCode code="delete_query_suggestions_block_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a block list used for query suggestions for an index. A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked. DeleteQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
</tr>
<tr>
    <td><a href="#list_query_suggestions_block_lists"><CopyableCode code="list_query_suggestions_block_lists" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Lists the block lists used for query suggestions for an index. For information on the current quota limits for block lists, see Quotas for Amazon Kendra. ListQuerySuggestionsBlockLists is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
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
    defaultValue="describe_query_suggestions_block_list"
    values={[
        { label: 'describe_query_suggestions_block_list', value: 'describe_query_suggestions_block_list' }
    ]}
>
<TabItem value="describe_query_suggestions_block_list">

Gets information about a block list used for query suggestions for an index. This is used to check the current settings that are applied to a block list. DescribeQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
SELECT
CreatedAt,
Description,
ErrorMessage,
FileSizeBytes,
Id,
IndexId,
ItemCount,
Name,
RoleArn,
SourceS3Path,
Status,
UpdatedAt
FROM aws.kendra.query_suggestions_block_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_query_suggestions_block_list"
    values={[
        { label: 'create_query_suggestions_block_list', value: 'create_query_suggestions_block_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_query_suggestions_block_list">

Creates a block list to exlcude certain queries from suggestions. Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion. You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line. For information on the current quota limits for block lists, see Quotas for Amazon Kendra. CreateQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region. For an example of creating a block list for query suggestions using the Python SDK, see Query suggestions block list.

```sql
INSERT INTO aws.kendra.query_suggestions_block_lists (
IndexId,
Name,
Description,
SourceS3Path,
ClientToken,
RoleArn,
Tags,
region
)
SELECT 
'{{ IndexId }}' /* required */,
'{{ Name }}',
'{{ Description }}',
'{{ SourceS3Path }}' /* required */,
'{{ ClientToken }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: query_suggestions_block_lists
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the query_suggestions_block_lists resource.
    - name: IndexId
      value: "{{ IndexId }}"
      description: |
        The identifier of the index you want to create a query suggestions block list for.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name for the block list. For example, the name 'offensive-words', which includes all offensive words that could appear in user queries and need to be blocked from suggestions.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the block list. For example, the description "List of all offensive words that can appear in user queries and need to be blocked from suggestions."
    - name: SourceS3Path
      description: |
        Information required to find a specific file in an Amazon S3 bucket.
      value:
        Bucket: "{{ Bucket }}"
        Key: "{{ Key }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A token that you provide to identify the request to create a query suggestions block list.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket that contains the block list text file. For more information, see IAM access roles for Amazon Kendra.
    - name: Tags
      description: |
        A list of key-value pairs that identify or categorize the block list. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_query_suggestions_block_list"
    values={[
        { label: 'update_query_suggestions_block_list', value: 'update_query_suggestions_block_list' }
    ]}
>
<TabItem value="update_query_suggestions_block_list">

Updates a block list used for query suggestions for an index. Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately. If a block list is updating, then you need to wait for the first update to finish before submitting another update. Amazon Kendra supports partial updates, so you only need to provide the fields you want to update. UpdateQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
UPDATE aws.kendra.query_suggestions_block_lists
SET 
IndexId = '{{ IndexId }}',
Id = '{{ Id }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
SourceS3Path = '{{ SourceS3Path }}',
RoleArn = '{{ RoleArn }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_query_suggestions_block_list"
    values={[
        { label: 'delete_query_suggestions_block_list', value: 'delete_query_suggestions_block_list' }
    ]}
>
<TabItem value="delete_query_suggestions_block_list">

Deletes a block list used for query suggestions for an index. A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked. DeleteQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
DELETE FROM aws.kendra.query_suggestions_block_lists
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_query_suggestions_block_lists"
    values={[
        { label: 'list_query_suggestions_block_lists', value: 'list_query_suggestions_block_lists' }
    ]}
>
<TabItem value="list_query_suggestions_block_lists">

Lists the block lists used for query suggestions for an index. For information on the current quota limits for block lists, see Quotas for Amazon Kendra. ListQuerySuggestionsBlockLists is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
EXEC aws.kendra.query_suggestions_block_lists.list_query_suggestions_block_lists 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
