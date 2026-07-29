--- 
title: indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - indexes
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

Creates, updates, deletes, gets or lists an <code>indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.indexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_index"
    values={[
        { label: 'describe_index', value: 'describe_index' }
    ]}
>
<TabItem value="describe_index">

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
    <td><CopyableCode code="capacity_units" /></td>
    <td><code>object</code></td>
    <td>For Enterprise Edition indexes, you can choose to use additional capacity to meet the needs of your application. This contains the capacity units used for the index. A query or document storage capacity of zero indicates that the index is using the default capacity. For more information on the default capacity for an index and adjusting this, see Adjusting capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the index was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the index. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_metadata_configurations" /></td>
    <td><code>array</code></td>
    <td>Configuration information for document metadata or fields. Document metadata are fields or attributes associated with your documents. For example, the company department name associated with each document.</td>
</tr>
<tr>
    <td><CopyableCode code="edition" /></td>
    <td><code>string</code></td>
    <td>The Amazon Kendra edition used for the index. You decide the edition when you create the index. (DEVELOPER_EDITION, ENTERPRISE_EDITION, GEN_AI_ENTERPRISE_EDITION)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>When the Status field value is FAILED, the ErrorMessage field contains a message that explains why. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the index. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="index_statistics" /></td>
    <td><code>object</code></td>
    <td>Provides information about the number of FAQ questions and answers and the number of text documents indexed.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the index. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that gives Amazon Kendra permission to write to your Amazon CloudWatch logs. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The identifier of the KMS customer master key (CMK) that is used to encrypt your data. Amazon Kendra doesn't support asymmetric CMKs.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the index. When the value is ACTIVE, the index is ready for use. If the Status field value is FAILED, the ErrorMessage field contains a message that explains why. (CREATING, ACTIVE, DELETING, FAILED, UPDATING, SYSTEM_UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the index was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user_context_policy" /></td>
    <td><code>string</code></td>
    <td>The user context policy for the Amazon Kendra index. (ATTRIBUTE_FILTER, USER_TOKEN)</td>
</tr>
<tr>
    <td><CopyableCode code="user_group_resolution_configuration" /></td>
    <td><code>object</code></td>
    <td>Whether you have enabled IAM Identity Center identity source for your users and groups. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</td>
</tr>
<tr>
    <td><CopyableCode code="user_token_configurations" /></td>
    <td><code>array</code></td>
    <td>The user token configuration for the Amazon Kendra index.</td>
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
    <td><a href="#describe_index"><CopyableCode code="describe_index" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an Amazon Kendra index.</td>
</tr>
<tr>
    <td><a href="#create_index"><CopyableCode code="create_index" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active, you can index your documents using the BatchPutDocument API or using one of the supported data sources. For an example of creating an index and data source using the Python SDK, see Getting started with Python SDK. For an example of creating an index and data source using the Java SDK, see Getting started with Java SDK.</td>
</tr>
<tr>
    <td><a href="#associate_personas_to_entities"><CopyableCode code="associate_personas_to_entities" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-Personas"><code>Personas</code></a></td>
    <td></td>
    <td>Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.</td>
</tr>
<tr>
    <td><a href="#disassociate_personas_from_entities"><CopyableCode code="disassociate_personas_from_entities" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-EntityIds"><code>EntityIds</code></a></td>
    <td></td>
    <td>Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.</td>
</tr>
<tr>
    <td><a href="#update_index"><CopyableCode code="update_index" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Amazon Kendra index.</td>
</tr>
<tr>
    <td><a href="#delete_index"><CopyableCode code="delete_index" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the Status field returned by a call to the DescribeIndex API is set to DELETING.</td>
</tr>
<tr>
    <td><a href="#batch_delete_document"><CopyableCode code="batch_delete_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-DocumentIdList"><code>DocumentIdList</code></a></td>
    <td></td>
    <td>Removes one or more documents from an index. The documents must have been added with the BatchPutDocument API. The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to your Amazon Web Services CloudWatch log. You can also use the BatchGetDocumentStatus API to monitor the progress of deleting your documents. Deleting documents from an index using BatchDeleteDocument could take up to an hour or more, depending on the number of documents you want to delete.</td>
</tr>
<tr>
    <td><a href="#batch_put_document"><CopyableCode code="batch_put_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-Documents"><code>Documents</code></a></td>
    <td></td>
    <td>Adds one or more documents to an index. The BatchPutDocument API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index. The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log. You can also use the BatchGetDocumentStatus API to monitor the progress of indexing your documents. For an example of ingesting inline documents using Python and Java SDKs, see Adding files directly to an index.</td>
</tr>
<tr>
    <td><a href="#query"><CopyableCode code="query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Searches an index given an input query. If you are working with large language models (LLMs) or implementing retrieval augmented generation (RAG) systems, you can use Amazon Kendra's Retrieve API, which can return longer semantically relevant passages. We recommend using the Retrieve API instead of filing a service limit increase to increase the Query API document excerpt length. You can configure boosting or relevance tuning at the query level to override boosting at the index level, filter based on document fields/attributes and faceted search, and filter based on the user or their group access to documents. You can also include certain fields in the response that might provide useful additional information. A query response contains three types of results. Relevant suggested answers. The answers can be either a text excerpt or table excerpt. The answer can be highlighted in the excerpt. Matching FAQs or questions-answer from your FAQ file. Relevant documents. This result type includes an excerpt of the document with the document title. The searched terms can be highlighted in the excerpt. You can specify that the query return only one type of result using the QueryResultTypeFilter parameter. Each query returns the 100 most relevant results. If you filter result type to only question-answers, a maximum of four results are returned. If you filter result type to only answers, a maximum of three results are returned. If you're using an Amazon Kendra Gen AI Enterprise Edition index, you can only use ATTRIBUTE_FILTER to filter search results by user context. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use USER_TOKEN to configure user context policy, Amazon Kendra returns a ValidationException error.</td>
</tr>
<tr>
    <td><a href="#retrieve"><CopyableCode code="retrieve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-QueryText"><code>QueryText</code></a></td>
    <td></td>
    <td>Retrieves relevant passages or text excerpts given an input query. This API is similar to the Query API. However, by default, the Query API only returns excerpt passages of up to 100 token words. With the Retrieve API, you can retrieve longer passages of up to 200 token words and up to 100 semantically relevant passages. This doesn't include question-answer or FAQ type responses from your index. The passages are text excerpts that can be semantically extracted from multiple documents and multiple parts of the same document. If in extreme cases your documents produce zero passages using the Retrieve API, you can alternatively use the Query API and its types of responses. You can also do the following: Override boosting at the index level Filter based on document fields or attributes Filter based on the user or their group access to documents View the confidence score bucket for a retrieved passage result. The confidence bucket provides a relative ranking that indicates how confident Amazon Kendra is that the response is relevant to the query. Confidence score buckets are currently available only for English. You can also include certain fields in the response that might provide useful additional information. The Retrieve API shares the number of query capacity units that you set for your index. For more information on what's included in a single capacity unit and the default base capacity for an index, see Adjusting capacity. If you're using an Amazon Kendra Gen AI Enterprise Edition index, you can only use ATTRIBUTE_FILTER to filter search results by user context. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use USER_TOKEN to configure user context policy, Amazon Kendra returns a ValidationException error.</td>
</tr>
<tr>
    <td><a href="#submit_feedback"><CopyableCode code="submit_feedback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-QueryId"><code>QueryId</code></a></td>
    <td></td>
    <td>Enables you to provide feedback to Amazon Kendra to improve the performance of your index. SubmitFeedback is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
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
    defaultValue="describe_index"
    values={[
        { label: 'describe_index', value: 'describe_index' }
    ]}
>
<TabItem value="describe_index">

Gets information about an Amazon Kendra index.

```sql
SELECT
capacity_units,
created_at,
description,
document_metadata_configurations,
edition,
error_message,
id,
index_statistics,
name,
role_arn,
server_side_encryption_configuration,
status,
updated_at,
user_context_policy,
user_group_resolution_configuration,
user_token_configurations
FROM aws.kendra.indexes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_index"
    values={[
        { label: 'create_index', value: 'create_index' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_index">

Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active, you can index your documents using the BatchPutDocument API or using one of the supported data sources. For an example of creating an index and data source using the Python SDK, see Getting started with Python SDK. For an example of creating an index and data source using the Java SDK, see Getting started with Java SDK.

```sql
INSERT INTO aws.kendra.indexes (
Name,
Edition,
RoleArn,
ServerSideEncryptionConfiguration,
Description,
ClientToken,
Tags,
UserTokenConfigurations,
UserContextPolicy,
UserGroupResolutionConfiguration,
region
)
SELECT 
'{{ Name }}',
'{{ Edition }}',
'{{ RoleArn }}' /* required */,
'{{ ServerSideEncryptionConfiguration }}',
'{{ Description }}',
'{{ ClientToken }}',
'{{ Tags }}',
'{{ UserTokenConfigurations }}',
'{{ UserContextPolicy }}',
'{{ UserGroupResolutionConfiguration }}',
'{{ region }}'
RETURNING
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: indexes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the indexes resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name for the index.
    - name: Edition
      value: "{{ Edition }}"
      description: |
        The Amazon Kendra edition to use for the index. Choose DEVELOPER_EDITION for indexes intended for development, testing, or proof of concept. Use ENTERPRISE_EDITION for production. Use GEN_AI_ENTERPRISE_EDITION for creating generative AI applications. Once you set the edition for an index, it can't be changed. The Edition parameter is optional. If you don't supply a value, the default is ENTERPRISE_EDITION. For more information on quota limits for Gen AI Enterprise Edition, Enterprise Edition, and Developer Edition indices, see Quotas.
      valid_values: ['DEVELOPER_EDITION', 'ENTERPRISE_EDITION', 'GEN_AI_ENTERPRISE_EDITION']
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role with permission to access your Amazon CloudWatch logs and metrics. For more information, see IAM access roles for Amazon Kendra.
    - name: ServerSideEncryptionConfiguration
      description: |
        The identifier of the KMS customer managed key (CMK) that's used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.
      value:
        KmsKeyId: "{{ KmsKeyId }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the index.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A token that you provide to identify the request to create an index. Multiple calls to the CreateIndex API with the same client token will create only one index.
    - name: Tags
      description: |
        A list of key-value pairs that identify or categorize the index. You can also use tags to help control access to the index. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: UserTokenConfigurations
      description: |
        The user token configuration. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use UserTokenConfigurations to configure user context policy, Amazon Kendra returns a ValidationException error.
      value:
        - JwtTokenTypeConfiguration:
            KeyLocation: "{{ KeyLocation }}"
            URL: "{{ URL }}"
            SecretManagerArn: "{{ SecretManagerArn }}"
            UserNameAttributeField: "{{ UserNameAttributeField }}"
            GroupAttributeField: "{{ GroupAttributeField }}"
            Issuer: "{{ Issuer }}"
            ClaimRegex: "{{ ClaimRegex }}"
          JsonTokenTypeConfiguration:
            UserNameAttributeField: "{{ UserNameAttributeField }}"
            GroupAttributeField: "{{ GroupAttributeField }}"
    - name: UserContextPolicy
      value: "{{ UserContextPolicy }}"
      description: |
        The user context policy. If you're using an Amazon Kendra Gen AI Enterprise Edition index, you can only use ATTRIBUTE_FILTER to filter search results by user context. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use USER_TOKEN to configure user context policy, Amazon Kendra returns a ValidationException error. ATTRIBUTE_FILTER All indexed content is searchable and displayable for all users. If you want to filter search results on user context, you can use the attribute filters of _user_id and _group_ids or you can provide user and group information in UserContext. USER_TOKEN Enables token-based user access control to filter search results on user context. All documents with no access control and all documents accessible to the user will be searchable and displayable.
      valid_values: ['ATTRIBUTE_FILTER', 'USER_TOKEN']
    - name: UserGroupResolutionConfiguration
      description: |
        Gets users and groups from IAM Identity Center identity source. To configure this, see UserGroupResolutionConfiguration. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. If you're using an Amazon Kendra Gen AI Enterprise Edition index, UserGroupResolutionConfiguration isn't supported.
      value:
        UserGroupResolutionMode: "{{ UserGroupResolutionMode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_personas_to_entities"
    values={[
        { label: 'associate_personas_to_entities', value: 'associate_personas_to_entities' },
        { label: 'disassociate_personas_from_entities', value: 'disassociate_personas_from_entities' },
        { label: 'update_index', value: 'update_index' }
    ]}
>
<TabItem value="associate_personas_to_entities">

Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.

```sql
UPDATE aws.kendra.indexes
SET 
Id = '{{ Id }}',
IndexId = '{{ IndexId }}',
Personas = '{{ Personas }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required
AND Personas = '{{ Personas }}' --required
RETURNING
failed_entity_list;
```
</TabItem>
<TabItem value="disassociate_personas_from_entities">

Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.

```sql
UPDATE aws.kendra.indexes
SET 
Id = '{{ Id }}',
IndexId = '{{ IndexId }}',
EntityIds = '{{ EntityIds }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required
AND EntityIds = '{{ EntityIds }}' --required
RETURNING
failed_entity_list;
```
</TabItem>
<TabItem value="update_index">

Updates an Amazon Kendra index.

```sql
UPDATE aws.kendra.indexes
SET 
Id = '{{ Id }}',
Name = '{{ Name }}',
RoleArn = '{{ RoleArn }}',
Description = '{{ Description }}',
DocumentMetadataConfigurationUpdates = '{{ DocumentMetadataConfigurationUpdates }}',
CapacityUnits = '{{ CapacityUnits }}',
UserTokenConfigurations = '{{ UserTokenConfigurations }}',
UserContextPolicy = '{{ UserContextPolicy }}',
UserGroupResolutionConfiguration = '{{ UserGroupResolutionConfiguration }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_index"
    values={[
        { label: 'delete_index', value: 'delete_index' }
    ]}
>
<TabItem value="delete_index">

Deletes an Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the Status field returned by a call to the DescribeIndex API is set to DELETING.

```sql
DELETE FROM aws.kendra.indexes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_document"
    values={[
        { label: 'batch_delete_document', value: 'batch_delete_document' },
        { label: 'batch_put_document', value: 'batch_put_document' },
        { label: 'query', value: 'query' },
        { label: 'retrieve', value: 'retrieve' },
        { label: 'submit_feedback', value: 'submit_feedback' }
    ]}
>
<TabItem value="batch_delete_document">

Removes one or more documents from an index. The documents must have been added with the BatchPutDocument API. The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to your Amazon Web Services CloudWatch log. You can also use the BatchGetDocumentStatus API to monitor the progress of deleting your documents. Deleting documents from an index using BatchDeleteDocument could take up to an hour or more, depending on the number of documents you want to delete.

```sql
EXEC aws.kendra.indexes.batch_delete_document 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"DocumentIdList": "{{ DocumentIdList }}", 
"DataSourceSyncJobMetricTarget": "{{ DataSourceSyncJobMetricTarget }}"
}'
;
```
</TabItem>
<TabItem value="batch_put_document">

Adds one or more documents to an index. The BatchPutDocument API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index. The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log. You can also use the BatchGetDocumentStatus API to monitor the progress of indexing your documents. For an example of ingesting inline documents using Python and Java SDKs, see Adding files directly to an index.

```sql
EXEC aws.kendra.indexes.batch_put_document 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"RoleArn": "{{ RoleArn }}", 
"Documents": "{{ Documents }}", 
"CustomDocumentEnrichmentConfiguration": "{{ CustomDocumentEnrichmentConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="query">

Searches an index given an input query. If you are working with large language models (LLMs) or implementing retrieval augmented generation (RAG) systems, you can use Amazon Kendra's Retrieve API, which can return longer semantically relevant passages. We recommend using the Retrieve API instead of filing a service limit increase to increase the Query API document excerpt length. You can configure boosting or relevance tuning at the query level to override boosting at the index level, filter based on document fields/attributes and faceted search, and filter based on the user or their group access to documents. You can also include certain fields in the response that might provide useful additional information. A query response contains three types of results. Relevant suggested answers. The answers can be either a text excerpt or table excerpt. The answer can be highlighted in the excerpt. Matching FAQs or questions-answer from your FAQ file. Relevant documents. This result type includes an excerpt of the document with the document title. The searched terms can be highlighted in the excerpt. You can specify that the query return only one type of result using the QueryResultTypeFilter parameter. Each query returns the 100 most relevant results. If you filter result type to only question-answers, a maximum of four results are returned. If you filter result type to only answers, a maximum of three results are returned. If you're using an Amazon Kendra Gen AI Enterprise Edition index, you can only use ATTRIBUTE_FILTER to filter search results by user context. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use USER_TOKEN to configure user context policy, Amazon Kendra returns a ValidationException error.

```sql
EXEC aws.kendra.indexes.query 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"QueryText": "{{ QueryText }}", 
"AttributeFilter": "{{ AttributeFilter }}", 
"Facets": "{{ Facets }}", 
"RequestedDocumentAttributes": "{{ RequestedDocumentAttributes }}", 
"QueryResultTypeFilter": "{{ QueryResultTypeFilter }}", 
"DocumentRelevanceOverrideConfigurations": "{{ DocumentRelevanceOverrideConfigurations }}", 
"PageNumber": {{ PageNumber }}, 
"PageSize": {{ PageSize }}, 
"SortingConfiguration": "{{ SortingConfiguration }}", 
"SortingConfigurations": "{{ SortingConfigurations }}", 
"UserContext": "{{ UserContext }}", 
"VisitorId": "{{ VisitorId }}", 
"SpellCorrectionConfiguration": "{{ SpellCorrectionConfiguration }}", 
"CollapseConfiguration": "{{ CollapseConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="retrieve">

Retrieves relevant passages or text excerpts given an input query. This API is similar to the Query API. However, by default, the Query API only returns excerpt passages of up to 100 token words. With the Retrieve API, you can retrieve longer passages of up to 200 token words and up to 100 semantically relevant passages. This doesn't include question-answer or FAQ type responses from your index. The passages are text excerpts that can be semantically extracted from multiple documents and multiple parts of the same document. If in extreme cases your documents produce zero passages using the Retrieve API, you can alternatively use the Query API and its types of responses. You can also do the following: Override boosting at the index level Filter based on document fields or attributes Filter based on the user or their group access to documents View the confidence score bucket for a retrieved passage result. The confidence bucket provides a relative ranking that indicates how confident Amazon Kendra is that the response is relevant to the query. Confidence score buckets are currently available only for English. You can also include certain fields in the response that might provide useful additional information. The Retrieve API shares the number of query capacity units that you set for your index. For more information on what's included in a single capacity unit and the default base capacity for an index, see Adjusting capacity. If you're using an Amazon Kendra Gen AI Enterprise Edition index, you can only use ATTRIBUTE_FILTER to filter search results by user context. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use USER_TOKEN to configure user context policy, Amazon Kendra returns a ValidationException error.

```sql
EXEC aws.kendra.indexes.retrieve 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"QueryText": "{{ QueryText }}", 
"AttributeFilter": "{{ AttributeFilter }}", 
"RequestedDocumentAttributes": "{{ RequestedDocumentAttributes }}", 
"DocumentRelevanceOverrideConfigurations": "{{ DocumentRelevanceOverrideConfigurations }}", 
"PageNumber": {{ PageNumber }}, 
"PageSize": {{ PageSize }}, 
"UserContext": "{{ UserContext }}"
}'
;
```
</TabItem>
<TabItem value="submit_feedback">

Enables you to provide feedback to Amazon Kendra to improve the performance of your index. SubmitFeedback is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
EXEC aws.kendra.indexes.submit_feedback 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"QueryId": "{{ QueryId }}", 
"ClickFeedbackItems": "{{ ClickFeedbackItems }}", 
"RelevanceFeedbackItems": "{{ RelevanceFeedbackItems }}"
}'
;
```
</TabItem>
</Tabs>
