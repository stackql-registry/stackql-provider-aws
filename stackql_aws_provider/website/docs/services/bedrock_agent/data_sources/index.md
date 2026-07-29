--- 
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
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

Creates, updates, deletes, gets or lists a <code>data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_source"
    values={[
        { label: 'get_data_source', value: 'get_data_source' },
        { label: 'list_data_sources', value: 'list_data_sources' }
    ]}
>
<TabItem value="get_data_source">

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
    <td>The name of the data source. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the data source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_deletion_policy" /></td>
    <td><code>string</code></td>
    <td>The data deletion policy for the data source. (RETAIN, DELETE)</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_configuration" /></td>
    <td><code>object</code></td>
    <td>The connection configuration for the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data source. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>The detailed reasons on the failure to delete a data source.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base to which the data source belongs. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration for server-side encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source. The following statuses are possible: Available – The data source has been created and is ready for ingestion into the knowledge base. Deleting – The data source is being deleted. (AVAILABLE, DELETING, DELETE_UNSUCCESSFUL)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the data source was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vector_ingestion_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains details about how to ingest the documents in a data source.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_sources">

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
    <td>The name of the data source. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data source. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base to which the data source belongs. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source. (AVAILABLE, DELETING, DELETE_UNSUCCESSFUL)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the data source was last updated.</td>
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
    <td><a href="#get_data_source"><CopyableCode code="get_data_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a data source.</td>
</tr>
<tr>
    <td><a href="#list_data_sources"><CopyableCode code="list_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the data sources in a knowledge base and information about each one.</td>
</tr>
<tr>
    <td><a href="#create_data_source"><CopyableCode code="create_data_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-dataSourceConfiguration"><code>dataSourceConfiguration</code></a></td>
    <td></td>
    <td>Connects a knowledge base to a data source. You specify the configuration for the specific data source service in the dataSourceConfiguration field. You can't change the chunkingConfiguration after you create the data source connector.</td>
</tr>
<tr>
    <td><a href="#update_data_source"><CopyableCode code="update_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-dataSourceConfiguration"><code>dataSourceConfiguration</code></a></td>
    <td></td>
    <td>Updates the configurations for a data source connector. You can't change the chunkingConfiguration after you create the data source connector. Specify the existing chunkingConfiguration.</td>
</tr>
<tr>
    <td><a href="#delete_data_source"><CopyableCode code="delete_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a data source from a knowledge base.</td>
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
    <td>The unique identifier of the data source to delete.</td>
</tr>
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base from which to delete the data source.</td>
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
    defaultValue="get_data_source"
    values={[
        { label: 'get_data_source', value: 'get_data_source' },
        { label: 'list_data_sources', value: 'list_data_sources' }
    ]}
>
<TabItem value="get_data_source">

Gets information about a data source.

```sql
SELECT
name,
created_at,
data_deletion_policy,
data_source_configuration,
data_source_id,
description,
failure_reasons,
knowledge_base_id,
server_side_encryption_configuration,
status,
updated_at,
vector_ingestion_configuration
FROM aws.bedrock_agent.data_sources
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND data_source_id = '{{ data_source_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_sources">

Lists the data sources in a knowledge base and information about each one.

```sql
SELECT
name,
data_source_id,
description,
knowledge_base_id,
status,
updated_at
FROM aws.bedrock_agent.data_sources
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_source"
    values={[
        { label: 'create_data_source', value: 'create_data_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_source">

Connects a knowledge base to a data source. You specify the configuration for the specific data source service in the dataSourceConfiguration field. You can't change the chunkingConfiguration after you create the data source connector.

```sql
INSERT INTO aws.bedrock_agent.data_sources (
clientToken,
name,
description,
dataSourceConfiguration,
dataDeletionPolicy,
serverSideEncryptionConfiguration,
vectorIngestionConfiguration,
knowledge_base_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ description }}',
'{{ dataSourceConfiguration }}' /* required */,
'{{ dataDeletionPolicy }}',
'{{ serverSideEncryptionConfiguration }}',
'{{ vectorIngestionConfiguration }}',
'{{ knowledge_base_id }}',
'{{ region }}'
RETURNING
data_source
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_sources
  props:
    - name: knowledge_base_id
      value: "{{ knowledge_base_id }}"
      description: Required parameter for the data_sources resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_sources resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: dataSourceConfiguration
      description: |
        The connection configuration for the data source.
      value:
        type_: "{{ type_ }}"
        s3Configuration:
          bucketArn: "{{ bucketArn }}"
          inclusionPrefixes:
            - "{{ inclusionPrefixes }}"
          bucketOwnerAccountId: "{{ bucketOwnerAccountId }}"
        webConfiguration:
          sourceConfiguration:
            urlConfiguration:
              seedUrls:
                - url: "{{ url }}"
          crawlerConfiguration:
            crawlerLimits:
              rateLimit: {{ rateLimit }}
              maxPages: {{ maxPages }}
            inclusionFilters:
              - "{{ inclusionFilters }}"
            exclusionFilters:
              - "{{ exclusionFilters }}"
            scope: "{{ scope }}"
            userAgent: "{{ userAgent }}"
            userAgentHeader: "{{ userAgentHeader }}"
        confluenceConfiguration:
          sourceConfiguration:
            hostUrl: "{{ hostUrl }}"
            hostType: "{{ hostType }}"
            authType: "{{ authType }}"
            credentialsSecretArn: "{{ credentialsSecretArn }}"
          crawlerConfiguration:
            filterConfiguration:
              type_: "{{ type_ }}"
              patternObjectFilter:
                filters: "{{ filters }}"
        salesforceConfiguration:
          sourceConfiguration:
            hostUrl: "{{ hostUrl }}"
            authType: "{{ authType }}"
            credentialsSecretArn: "{{ credentialsSecretArn }}"
          crawlerConfiguration:
            filterConfiguration:
              type_: "{{ type_ }}"
              patternObjectFilter:
                filters: "{{ filters }}"
        sharePointConfiguration:
          sourceConfiguration:
            tenantId: "{{ tenantId }}"
            domain: "{{ domain }}"
            siteUrls:
              - "{{ siteUrls }}"
            hostType: "{{ hostType }}"
            authType: "{{ authType }}"
            credentialsSecretArn: "{{ credentialsSecretArn }}"
          crawlerConfiguration:
            filterConfiguration:
              type_: "{{ type_ }}"
              patternObjectFilter:
                filters: "{{ filters }}"
    - name: dataDeletionPolicy
      value: "{{ dataDeletionPolicy }}"
      valid_values: ['RETAIN', 'DELETE']
    - name: serverSideEncryptionConfiguration
      description: |
        Contains the configuration for server-side encryption.
      value:
        kmsKeyArn: "{{ kmsKeyArn }}"
    - name: vectorIngestionConfiguration
      description: |
        Contains details about how to ingest the documents in a data source.
      value:
        chunkingConfiguration:
          chunkingStrategy: "{{ chunkingStrategy }}"
          fixedSizeChunkingConfiguration:
            maxTokens: {{ maxTokens }}
            overlapPercentage: {{ overlapPercentage }}
          hierarchicalChunkingConfiguration:
            levelConfigurations:
              - maxTokens: {{ maxTokens }}
            overlapTokens: {{ overlapTokens }}
          semanticChunkingConfiguration:
            maxTokens: {{ maxTokens }}
            bufferSize: {{ bufferSize }}
            breakpointPercentileThreshold: {{ breakpointPercentileThreshold }}
        customTransformationConfiguration:
          intermediateStorage:
            s3Location:
              uri: "{{ uri }}"
          transformations:
            - transformationFunction:
                transformationLambdaConfiguration:
                  lambdaArn: "{{ lambdaArn }}"
              stepToApply: "{{ stepToApply }}"
        parsingConfiguration:
          parsingStrategy: "{{ parsingStrategy }}"
          bedrockFoundationModelConfiguration:
            modelArn: "{{ modelArn }}"
            parsingPrompt:
              parsingPromptText: "{{ parsingPromptText }}"
            parsingModality: "{{ parsingModality }}"
          bedrockDataAutomationConfiguration:
            parsingModality: "{{ parsingModality }}"
        contextEnrichmentConfiguration:
          type_: "{{ type_ }}"
          bedrockFoundationModelConfiguration:
            enrichmentStrategyConfiguration:
              method: "{{ method }}"
            modelArn: "{{ modelArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_source"
    values={[
        { label: 'update_data_source', value: 'update_data_source' }
    ]}
>
<TabItem value="update_data_source">

Updates the configurations for a data source connector. You can't change the chunkingConfiguration after you create the data source connector. Specify the existing chunkingConfiguration.

```sql
UPDATE aws.bedrock_agent.data_sources
SET 
name = '{{ name }}',
description = '{{ description }}',
dataSourceConfiguration = '{{ dataSourceConfiguration }}',
dataDeletionPolicy = '{{ dataDeletionPolicy }}',
serverSideEncryptionConfiguration = '{{ serverSideEncryptionConfiguration }}',
vectorIngestionConfiguration = '{{ vectorIngestionConfiguration }}'
WHERE 
knowledge_base_id = '{{ knowledge_base_id }}' --required
AND data_source_id = '{{ data_source_id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND dataSourceConfiguration = '{{ dataSourceConfiguration }}' --required
RETURNING
data_source;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_source"
    values={[
        { label: 'delete_data_source', value: 'delete_data_source' }
    ]}
>
<TabItem value="delete_data_source">

Deletes a data source from a knowledge base.

```sql
DELETE FROM aws.bedrock_agent.data_sources
WHERE knowledge_base_id = '{{ knowledge_base_id }}' --required
AND data_source_id = '{{ data_source_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
