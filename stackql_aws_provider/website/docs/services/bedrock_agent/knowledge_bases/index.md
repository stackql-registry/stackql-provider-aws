--- 
title: knowledge_bases
hide_title: false
hide_table_of_contents: false
keywords:
  - knowledge_bases
  - bedrock_agent
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.knowledge_bases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_knowledge_base"
    values={[
        { label: 'get_knowledge_base', value: 'get_knowledge_base' },
        { label: 'list_knowledge_bases', value: 'list_knowledge_bases' }
    ]}
>
<TabItem value="get_knowledge_base">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the knowledge base. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the knowledge base was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>A list of reasons that the API operation on the knowledge base failed.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:knowledge-base/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains details about the vector embeddings configuration of the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the knowledge base. The following statuses are possible: CREATING – The knowledge base is being created. ACTIVE – The knowledge base is ready to be queried. DELETING – The knowledge base is being deleted. UPDATING – The knowledge base is being updated. FAILED – The knowledge base API operation failed. (CREATING, ACTIVE, DELETING, UPDATING, FAILED, DELETE_UNSUCCESSFUL, UPDATE_UNSUCCESSFUL)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains the storage configuration of the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the knowledge base was last updated.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the knowledge base. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the knowledge base.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the knowledge base. (CREATING, ACTIVE, DELETING, UPDATING, FAILED, DELETE_UNSUCCESSFUL, UPDATE_UNSUCCESSFUL)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the knowledge base was last updated.</td>
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
    <td><a href="#get_knowledge_base"><CopyableCode code="get_knowledge_base" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a knowledge base.</td>
</tr>
<tr>
    <td><a href="#list_knowledge_bases"><CopyableCode code="list_knowledge_bases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the knowledge bases in an account. The list also includesinformation about each knowledge base.</td>
</tr>
<tr>
    <td><a href="#create_knowledge_base"><CopyableCode code="create_knowledge_base" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-knowledgeBaseConfiguration"><code>knowledgeBaseConfiguration</code></a></td>
    <td></td>
    <td>Creates a knowledge base. A knowledge base contains your data sources so that Large Language Models (LLMs) can use your data. To create a knowledge base, you must first set up your data sources and configure a supported vector store. For more information, see Set up a knowledge base. To create a managed knowledge base, provide a managedKnowledgeBaseConfiguration during creation. For more information, see Build a managed knowledge base. Provide the name and an optional description. Provide the Amazon Resource Name (ARN) with permissions to create a knowledge base in the roleArn field. For managed knowledge bases, set embeddingModelType to MANAGED to use the service-managed embedding model, or CUSTOM with an embeddingModelArn to use your own. To use your own KMS key for encryption, provide the ARN in serverSideEncryptionConfiguration. No vector store configuration is required for managed knowledge bases. For self-managed knowledge bases, provide the embedding model to use in the embeddingModelArn field in the knowledgeBaseConfiguration object. For self-managed knowledge bases, provide the configuration for your vector store in the storageConfiguration object. For an Amazon OpenSearch Service database, use the opensearchServerlessConfiguration object. For more information, see Create a vector store in Amazon OpenSearch Service. For an Amazon Aurora database, use the RdsConfiguration object. For more information, see Create a vector store in Amazon Aurora. For a Pinecone database, use the pineconeConfiguration object. For more information, see Create a vector store in Pinecone. For a Redis Enterprise Cloud database, use the redisEnterpriseCloudConfiguration object. For more information, see Create a vector store in Redis Enterprise Cloud.</td>
</tr>
<tr>
    <td><a href="#update_knowledge_base"><CopyableCode code="update_knowledge_base" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-knowledgeBaseConfiguration"><code>knowledgeBaseConfiguration</code></a></td>
    <td></td>
    <td>Updates the configuration of a knowledge base with the fields that you specify. Because all fields will be overwritten, you must include the same values for fields that you want to keep the same. You can change the following fields: name description roleArn You can't change the knowledgeBaseConfiguration or storageConfiguration fields, so you must specify the same configurations as when you created the knowledge base. You can send a GetKnowledgeBase request and copy the same configurations.</td>
</tr>
<tr>
    <td><a href="#delete_knowledge_base"><CopyableCode code="delete_knowledge_base" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a knowledge base. Before deleting a knowledge base, you should disassociate the knowledge base from any agents that it is associated with by making a DisassociateAgentKnowledgeBase request.</td>
</tr>
<tr>
    <td><a href="#start_ingestion_job"><CopyableCode code="start_ingestion_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Begins a data ingestion job. Data sources are ingested into your knowledge base so that Large Language Models (LLMs) can use your data.</td>
</tr>
<tr>
    <td><a href="#stop_ingestion_job"><CopyableCode code="stop_ingestion_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-ingestion_job_id"><code>ingestion_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a currently running data ingestion job. You can send a StartIngestionJob request again to ingest the rest of your data when you are ready.</td>
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
<tr id="parameter-data_source_id">
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data source for the data ingestion job you want to stop.</td>
</tr>
<tr id="parameter-ingestion_job_id">
    <td><CopyableCode code="ingestion_job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data ingestion job you want to stop.</td>
</tr>
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base for the data ingestion job you want to stop.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_knowledge_base"
    values={[
        { label: 'get_knowledge_base', value: 'get_knowledge_base' },
        { label: 'list_knowledge_bases', value: 'list_knowledge_bases' }
    ]}
>
<TabItem value="get_knowledge_base">

Gets information about a knowledge base.

```sql
SELECT
name,
created_at,
description,
failure_reasons,
knowledge_base_arn,
knowledge_base_configuration,
knowledge_base_id,
role_arn,
status,
storage_configuration,
updated_at
FROM aws.bedrock_agent.knowledge_bases
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_knowledge_bases">

Lists the knowledge bases in an account. The list also includesinformation about each knowledge base.

```sql
SELECT
name,
description,
knowledge_base_id,
status,
updated_at
FROM aws.bedrock_agent.knowledge_bases
WHERE region = '{{ region }}' -- required
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

Creates a knowledge base. A knowledge base contains your data sources so that Large Language Models (LLMs) can use your data. To create a knowledge base, you must first set up your data sources and configure a supported vector store. For more information, see Set up a knowledge base. To create a managed knowledge base, provide a managedKnowledgeBaseConfiguration during creation. For more information, see Build a managed knowledge base. Provide the name and an optional description. Provide the Amazon Resource Name (ARN) with permissions to create a knowledge base in the roleArn field. For managed knowledge bases, set embeddingModelType to MANAGED to use the service-managed embedding model, or CUSTOM with an embeddingModelArn to use your own. To use your own KMS key for encryption, provide the ARN in serverSideEncryptionConfiguration. No vector store configuration is required for managed knowledge bases. For self-managed knowledge bases, provide the embedding model to use in the embeddingModelArn field in the knowledgeBaseConfiguration object. For self-managed knowledge bases, provide the configuration for your vector store in the storageConfiguration object. For an Amazon OpenSearch Service database, use the opensearchServerlessConfiguration object. For more information, see Create a vector store in Amazon OpenSearch Service. For an Amazon Aurora database, use the RdsConfiguration object. For more information, see Create a vector store in Amazon Aurora. For a Pinecone database, use the pineconeConfiguration object. For more information, see Create a vector store in Pinecone. For a Redis Enterprise Cloud database, use the redisEnterpriseCloudConfiguration object. For more information, see Create a vector store in Redis Enterprise Cloud.

```sql
INSERT INTO aws.bedrock_agent.knowledge_bases (
clientToken,
name,
description,
roleArn,
knowledgeBaseConfiguration,
storageConfiguration,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ description }}',
'{{ roleArn }}' /* required */,
'{{ knowledgeBaseConfiguration }}' /* required */,
'{{ storageConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
knowledge_base
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: knowledge_bases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the knowledge_bases resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: knowledgeBaseConfiguration
      description: |
        Contains details about the vector embeddings configuration of the knowledge base.
      value:
        type_: "{{ type_ }}"
        vectorKnowledgeBaseConfiguration:
          embeddingModelArn: "{{ embeddingModelArn }}"
          embeddingModelConfiguration:
            bedrockEmbeddingModelConfiguration:
              dimensions: {{ dimensions }}
              embeddingDataType: "{{ embeddingDataType }}"
              audio:
                - segmentationConfiguration:
                    fixedLengthDuration: {{ fixedLengthDuration }}
              video:
                - segmentationConfiguration:
                    fixedLengthDuration: {{ fixedLengthDuration }}
          supplementalDataStorageConfiguration:
            storageLocations:
              - type_: "{{ type_ }}"
                s3Location:
                  uri: "{{ uri }}"
        managedKnowledgeBaseConfiguration:
          embeddingModelType: "{{ embeddingModelType }}"
          embeddingModelArn: "{{ embeddingModelArn }}"
          embeddingModelConfiguration:
            bedrockEmbeddingModelConfiguration:
              dimensions: {{ dimensions }}
              embeddingDataType: "{{ embeddingDataType }}"
              audio:
                - segmentationConfiguration:
                    fixedLengthDuration: {{ fixedLengthDuration }}
              video:
                - segmentationConfiguration:
                    fixedLengthDuration: {{ fixedLengthDuration }}
          serverSideEncryptionConfiguration:
            kmsKeyArn: "{{ kmsKeyArn }}"
        kendraKnowledgeBaseConfiguration:
          kendraIndexArn: "{{ kendraIndexArn }}"
        sqlKnowledgeBaseConfiguration:
          type_: "{{ type_ }}"
          redshiftConfiguration:
            storageConfigurations:
              - type_: "{{ type_ }}"
                awsDataCatalogConfiguration:
                  tableNames: "{{ tableNames }}"
                redshiftConfiguration:
                  databaseName: "{{ databaseName }}"
            queryEngineConfiguration:
              type_: "{{ type_ }}"
              serverlessConfiguration:
                workgroupArn: "{{ workgroupArn }}"
                authConfiguration: "{{ authConfiguration }}"
              provisionedConfiguration:
                clusterIdentifier: "{{ clusterIdentifier }}"
                authConfiguration: "{{ authConfiguration }}"
            queryGenerationConfiguration:
              executionTimeoutSeconds: {{ executionTimeoutSeconds }}
              generationContext:
                tables: "{{ tables }}"
                curatedQueries: "{{ curatedQueries }}"
    - name: storageConfiguration
      description: |
        Contains the storage configuration of the knowledge base.
      value:
        type_: "{{ type_ }}"
        opensearchServerlessConfiguration:
          collectionArn: "{{ collectionArn }}"
          vectorIndexName: "{{ vectorIndexName }}"
          fieldMapping:
            vectorField: "{{ vectorField }}"
            textField: "{{ textField }}"
            metadataField: "{{ metadataField }}"
        opensearchManagedClusterConfiguration:
          domainEndpoint: "{{ domainEndpoint }}"
          domainArn: "{{ domainArn }}"
          vectorIndexName: "{{ vectorIndexName }}"
          fieldMapping:
            vectorField: "{{ vectorField }}"
            textField: "{{ textField }}"
            metadataField: "{{ metadataField }}"
        pineconeConfiguration:
          connectionString: "{{ connectionString }}"
          credentialsSecretArn: "{{ credentialsSecretArn }}"
          namespace: "{{ namespace }}"
          fieldMapping:
            textField: "{{ textField }}"
            metadataField: "{{ metadataField }}"
        redisEnterpriseCloudConfiguration:
          endpoint: "{{ endpoint }}"
          vectorIndexName: "{{ vectorIndexName }}"
          credentialsSecretArn: "{{ credentialsSecretArn }}"
          fieldMapping:
            vectorField: "{{ vectorField }}"
            textField: "{{ textField }}"
            metadataField: "{{ metadataField }}"
        rdsConfiguration:
          resourceArn: "{{ resourceArn }}"
          credentialsSecretArn: "{{ credentialsSecretArn }}"
          databaseName: "{{ databaseName }}"
          tableName: "{{ tableName }}"
          fieldMapping:
            primaryKeyField: "{{ primaryKeyField }}"
            vectorField: "{{ vectorField }}"
            textField: "{{ textField }}"
            metadataField: "{{ metadataField }}"
            customMetadataField: "{{ customMetadataField }}"
        mongoDbAtlasConfiguration:
          endpoint: "{{ endpoint }}"
          databaseName: "{{ databaseName }}"
          collectionName: "{{ collectionName }}"
          vectorIndexName: "{{ vectorIndexName }}"
          credentialsSecretArn: "{{ credentialsSecretArn }}"
          fieldMapping:
            vectorField: "{{ vectorField }}"
            textField: "{{ textField }}"
            metadataField: "{{ metadataField }}"
          endpointServiceName: "{{ endpointServiceName }}"
          textIndexName: "{{ textIndexName }}"
        neptuneAnalyticsConfiguration:
          graphArn: "{{ graphArn }}"
          fieldMapping:
            textField: "{{ textField }}"
            metadataField: "{{ metadataField }}"
        s3VectorsConfiguration:
          vectorBucketArn: "{{ vectorBucketArn }}"
          indexArn: "{{ indexArn }}"
          indexName: "{{ indexName }}"
    - name: tags
      value: "{{ tags }}"
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

Updates the configuration of a knowledge base with the fields that you specify. Because all fields will be overwritten, you must include the same values for fields that you want to keep the same. You can change the following fields: name description roleArn You can't change the knowledgeBaseConfiguration or storageConfiguration fields, so you must specify the same configurations as when you created the knowledge base. You can send a GetKnowledgeBase request and copy the same configurations.

```sql
UPDATE aws.bedrock_agent.knowledge_bases
SET 
name = '{{ name }}',
description = '{{ description }}',
roleArn = '{{ roleArn }}',
knowledgeBaseConfiguration = '{{ knowledgeBaseConfiguration }}',
storageConfiguration = '{{ storageConfiguration }}'
WHERE 
knowledge_base_id = '{{ knowledge_base_id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND roleArn = '{{ roleArn }}' --required
AND knowledgeBaseConfiguration = '{{ knowledgeBaseConfiguration }}' --required
RETURNING
knowledge_base;
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

Deletes a knowledge base. Before deleting a knowledge base, you should disassociate the knowledge base from any agents that it is associated with by making a DisassociateAgentKnowledgeBase request.

```sql
DELETE FROM aws.bedrock_agent.knowledge_bases
WHERE knowledge_base_id = '{{ knowledge_base_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_ingestion_job"
    values={[
        { label: 'start_ingestion_job', value: 'start_ingestion_job' },
        { label: 'stop_ingestion_job', value: 'stop_ingestion_job' }
    ]}
>
<TabItem value="start_ingestion_job">

Begins a data ingestion job. Data sources are ingested into your knowledge base so that Large Language Models (LLMs) can use your data.

```sql
EXEC aws.bedrock_agent.knowledge_bases.start_ingestion_job 
@knowledge_base_id='{{ knowledge_base_id }}' --required, 
@data_source_id='{{ data_source_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"description": "{{ description }}"
}'
;
```
</TabItem>
<TabItem value="stop_ingestion_job">

Stops a currently running data ingestion job. You can send a StartIngestionJob request again to ingest the rest of your data when you are ready.

```sql
EXEC aws.bedrock_agent.knowledge_bases.stop_ingestion_job 
@knowledge_base_id='{{ knowledge_base_id }}' --required, 
@data_source_id='{{ data_source_id }}' --required, 
@ingestion_job_id='{{ ingestion_job_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
