--- 
title: knowledge_bases
hide_title: false
hide_table_of_contents: false
keywords:
  - knowledge_bases
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

Creates, updates, deletes, gets or lists a <code>knowledge_bases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="knowledge_bases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.knowledge_bases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_knowledge_base"
    values={[
        { label: 'describe_knowledge_base', value: 'describe_knowledge_base' },
        { label: 'list_knowledge_bases', value: 'list_knowledge_bases' }
    ]}
>
<TabItem value="describe_knowledge_base">

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
    <td><CopyableCode code="knowledge_base" /></td>
    <td><code>object</code></td>
    <td>The knowledge base.</td>
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
</tbody>
</table>
</TabItem>
<TabItem value="list_knowledge_bases">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the knowledge base was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the data source associated with the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of documents in the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the knowledge base. (pattern: &lt;code&gt;&#91;0-9a-zA-Z-_=.+&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_size_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the knowledge base in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the knowledge base. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125;&#93;&#91;\p&#123;L&#125;\p&#123;N&#125; _\-\.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_owner_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the primary owner of the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="primary_owner_username" /></td>
    <td><code>string</code></td>
    <td>The username of the primary owner of the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the knowledge base. (CREATING, UPDATING, ACTIVE, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the knowledge base was last updated.</td>
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
    <td><a href="#describe_knowledge_base"><CopyableCode code="describe_knowledge_base" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a knowledge base.</td>
</tr>
<tr>
    <td><a href="#list_knowledge_bases"><CopyableCode code="list_knowledge_bases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all knowledge bases in an Amazon QuickSight account.</td>
</tr>
<tr>
    <td><a href="#create_knowledge_base"><CopyableCode code="create_knowledge_base" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KnowledgeBaseId"><code>KnowledgeBaseId</code></a>, <a href="#parameter-DataSourceArn"><code>DataSourceArn</code></a>, <a href="#parameter-KnowledgeBaseConfiguration"><code>KnowledgeBaseConfiguration</code></a></td>
    <td></td>
    <td>Creates a knowledge base from a specified data source. Supported data source connector types include: S3_KNOWLEDGE_BASE – Uses an Amazon S3 bucket as the data source. WEB_CRAWLER – Uses web pages indexed by the built-in web crawler as the data source. GOOGLE_DRIVE – Uses Google Drive as the data source. Supports service account authentication only. SHAREPOINT – Uses SharePoint as the data source. Supports two-legged OAuth only. ONE_DRIVE – Uses OneDrive as the data source. Supports two-legged OAuth only.</td>
</tr>
<tr>
    <td><a href="#update_knowledge_base"><CopyableCode code="update_knowledge_base" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the properties of an existing knowledge base.</td>
</tr>
<tr>
    <td><a href="#delete_knowledge_base"><CopyableCode code="delete_knowledge_base" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a knowledge base.</td>
</tr>
<tr>
    <td><a href="#batch_delete_knowledge_base"><CopyableCode code="batch_delete_knowledge_base" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KnowledgeBaseIds"><code>KnowledgeBaseIds</code></a></td>
    <td></td>
    <td>Deletes one or more knowledge bases.</td>
</tr>
<tr>
    <td><a href="#search_knowledge_bases"><CopyableCode code="search_knowledge_bases" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for a subset of knowledge bases based on specified filters.</td>
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
    <td>The ID of the Amazon Web Services account that contains the knowledge base.</td>
</tr>
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the knowledge base.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
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
    defaultValue="describe_knowledge_base"
    values={[
        { label: 'describe_knowledge_base', value: 'describe_knowledge_base' },
        { label: 'list_knowledge_bases', value: 'list_knowledge_bases' }
    ]}
>
<TabItem value="describe_knowledge_base">

Describes a knowledge base.

```sql
SELECT
knowledge_base,
request_id,
status
FROM aws.quicksight.knowledge_bases
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_knowledge_bases">

Lists all knowledge bases in an Amazon QuickSight account.

```sql
SELECT
created_at,
data_source_arn,
document_count,
knowledge_base_arn,
knowledge_base_id,
knowledge_base_size_bytes,
name,
primary_owner_arn,
primary_owner_username,
status,
type,
updated_at
FROM aws.quicksight.knowledge_bases
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_knowledge_base"
    values={[
        { label: 'create_knowledge_base', value: 'create_knowledge_base' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_knowledge_base">

Creates a knowledge base from a specified data source. Supported data source connector types include: S3_KNOWLEDGE_BASE – Uses an Amazon S3 bucket as the data source. WEB_CRAWLER – Uses web pages indexed by the built-in web crawler as the data source. GOOGLE_DRIVE – Uses Google Drive as the data source. Supports service account authentication only. SHAREPOINT – Uses SharePoint as the data source. Supports two-legged OAuth only. ONE_DRIVE – Uses OneDrive as the data source. Supports two-legged OAuth only.

```sql
INSERT INTO aws.quicksight.knowledge_bases (
KnowledgeBaseId,
Name,
DataSourceArn,
KnowledgeBaseConfiguration,
Description,
Permissions,
MediaExtractionConfiguration,
AccessControlConfiguration,
PrimaryOwnerArn,
Tags,
aws_account_id,
region
)
SELECT 
'{{ KnowledgeBaseId }}' /* required */,
'{{ Name }}',
'{{ DataSourceArn }}' /* required */,
'{{ KnowledgeBaseConfiguration }}' /* required */,
'{{ Description }}',
'{{ Permissions }}',
'{{ MediaExtractionConfiguration }}',
'{{ AccessControlConfiguration }}',
'{{ PrimaryOwnerArn }}',
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
creation_status,
knowledge_base_arn,
knowledge_base_id,
request_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: knowledge_bases
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the knowledge_bases resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the knowledge_bases resource.
    - name: KnowledgeBaseId
      value: "{{ KnowledgeBaseId }}"
    - name: Name
      value: "{{ Name }}"
    - name: DataSourceArn
      value: "{{ DataSourceArn }}"
    - name: KnowledgeBaseConfiguration
      description: |
        The configuration settings for a knowledge base.
      value:
        templateConfiguration:
          template: "{{ template }}"
    - name: Description
      value: "{{ Description }}"
    - name: Permissions
      value:
        - Principal: "{{ Principal }}"
          Actions: "{{ Actions }}"
    - name: MediaExtractionConfiguration
      description: |
        The configuration for media extraction from knowledge base documents.
      value:
        imageExtractionConfiguration:
          imageExtractionStatus: "{{ imageExtractionStatus }}"
        audioExtractionConfiguration:
          audioExtractionStatus: "{{ audioExtractionStatus }}"
        videoExtractionConfiguration:
          videoExtractionStatus: "{{ videoExtractionStatus }}"
          videoExtractionType: "{{ videoExtractionType }}"
    - name: AccessControlConfiguration
      description: |
        The access control settings for a knowledge base. Use this structure to enable or disable document-level access control lists (ACLs) that filter query results based on the permissions from the source data connector.
      value:
        isACLEnabled: {{ isACLEnabled }}
    - name: PrimaryOwnerArn
      value: "{{ PrimaryOwnerArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_knowledge_base"
    values={[
        { label: 'update_knowledge_base', value: 'update_knowledge_base' }
    ]}
>
<TabItem value="update_knowledge_base">

Updates the properties of an existing knowledge base.

```sql
UPDATE aws.quicksight.knowledge_bases
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
KnowledgeBaseConfiguration = '{{ KnowledgeBaseConfiguration }}',
MediaExtractionConfiguration = '{{ MediaExtractionConfiguration }}',
IsEmailNotificationOptedForIngestionFailures = {{ IsEmailNotificationOptedForIngestionFailures }},
AccessControlConfiguration = '{{ AccessControlConfiguration }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND knowledge_base_id = '{{ knowledge_base_id }}' --required
AND region = '{{ region }}' --required
RETURNING
knowledge_base_arn,
knowledge_base_id,
request_id,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_knowledge_base"
    values={[
        { label: 'delete_knowledge_base', value: 'delete_knowledge_base' }
    ]}
>
<TabItem value="delete_knowledge_base">

Deletes a knowledge base.

```sql
DELETE FROM aws.quicksight.knowledge_bases
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND knowledge_base_id = '{{ knowledge_base_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_knowledge_base"
    values={[
        { label: 'batch_delete_knowledge_base', value: 'batch_delete_knowledge_base' },
        { label: 'search_knowledge_bases', value: 'search_knowledge_bases' }
    ]}
>
<TabItem value="batch_delete_knowledge_base">

Deletes one or more knowledge bases.

```sql
EXEC aws.quicksight.knowledge_bases.batch_delete_knowledge_base 
@aws_account_id='{{ aws_account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"KnowledgeBaseIds": "{{ KnowledgeBaseIds }}"
}'
;
```
</TabItem>
<TabItem value="search_knowledge_bases">

Searches for a subset of knowledge bases based on specified filters.

```sql
EXEC aws.quicksight.knowledge_bases.search_knowledge_bases 
@aws_account_id='{{ aws_account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Filters": "{{ Filters }}", 
"SortBy": "{{ SortBy }}"
}'
;
```
</TabItem>
</Tabs>
