--- 
title: knowledge_bases
hide_title: false
hide_table_of_contents: false
keywords:
  - knowledge_bases
  - qconnect
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.knowledge_bases" /></td></tr>
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
    <td>The name of the knowledge base. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ingestion_failure_reasons" /></td>
    <td><code>array</code></td>
    <td>List of failure reasons on ingestion per file.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestion_status" /></td>
    <td><code>string</code></td>
    <td>Status of ingestion on data source. (SYNC_FAILED, SYNCING_IN_PROGRESS, SYNC_SUCCESS, CREATE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_type" /></td>
    <td><code>string</code></td>
    <td>The type of knowledge base. (EXTERNAL, CUSTOM, QUICK_RESPONSES, MESSAGE_TEMPLATES, MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="last_content_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>An epoch timestamp indicating the most recent content modification inside the knowledge base. If no content exists in a knowledge base, this value is unset.</td>
</tr>
<tr>
    <td><CopyableCode code="rendering_configuration" /></td>
    <td><code>object</code></td>
    <td>Information about how to render the content.</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration information for the customer managed key used for encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="source_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration information about the external data source.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the knowledge base. (CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vector_ingestion_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains details about how to ingest the documents in a data source.</td>
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
    <td>The name of the knowledge base. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the knowledge base. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_type" /></td>
    <td><code>string</code></td>
    <td>The type of knowledge base. (EXTERNAL, CUSTOM, QUICK_RESPONSES, MESSAGE_TEMPLATES, MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="rendering_configuration" /></td>
    <td><code>object</code></td>
    <td>Information about how to render the content.</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration information for the customer managed key used for encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="source_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration information about the external data source.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the knowledge base summary. (CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vector_ingestion_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains details about how to ingest the documents in a data source.</td>
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
    <td>Retrieves information about the knowledge base.</td>
</tr>
<tr>
    <td><a href="#list_knowledge_bases"><CopyableCode code="list_knowledge_bases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the knowledge bases.</td>
</tr>
<tr>
    <td><a href="#create_knowledge_base"><CopyableCode code="create_knowledge_base" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-knowledgeBaseType"><code>knowledgeBaseType</code></a></td>
    <td></td>
    <td>Creates a knowledge base. When using this API, you cannot reuse Amazon AppIntegrations DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an InvalidRequestException error. For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following: Call DeleteKnowledgeBase. Call DeleteDataIntegration. Call CreateDataIntegration to recreate the DataIntegration or a create different one. Call CreateKnowledgeBase.</td>
</tr>
<tr>
    <td><a href="#update_knowledge_base_template_uri"><CopyableCode code="update_knowledge_base_template_uri" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-templateUri"><code>templateUri</code></a></td>
    <td></td>
    <td>Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in $&#123;variable&#125; format; this interpolated by Amazon Q in Connect using ingested content. For example, if you ingest a Salesforce article, it has an Id value, and you can set the template URI to https:​//myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*$&#123;Id&#125;*/view.</td>
</tr>
<tr>
    <td><a href="#remove_knowledge_base_template_uri"><CopyableCode code="remove_knowledge_base_template_uri" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a URI template from a knowledge base.</td>
</tr>
<tr>
    <td><a href="#delete_knowledge_base"><CopyableCode code="delete_knowledge_base" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the knowledge base. When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the Amazon AppIntegrations DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See DeleteDataIntegration and CreateDataIntegration in the Amazon AppIntegrations API Reference.</td>
</tr>
<tr>
    <td><a href="#start_import_job"><CopyableCode code="start_import_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-importJobType"><code>importJobType</code></a>, <a href="#parameter-uploadId"><code>uploadId</code></a></td>
    <td></td>
    <td>Start an asynchronous job to import Amazon Q in Connect resources from an uploaded source file. Before calling this API, use StartContentUpload to upload an asset that contains the resource data. For importing Amazon Q in Connect quick responses, you need to upload a csv file including the quick responses. For information about how to format the csv file for importing quick responses, see Import quick responses.</td>
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
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN. For importing Amazon Q in Connect quick responses, this should be a QUICK_RESPONSES type knowledge base.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
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

Retrieves information about the knowledge base.

```sql
SELECT
name,
description,
ingestion_failure_reasons,
ingestion_status,
knowledge_base_arn,
knowledge_base_id,
knowledge_base_type,
last_content_modification_time,
rendering_configuration,
server_side_encryption_configuration,
source_configuration,
status,
tags,
vector_ingestion_configuration
FROM aws.qconnect.knowledge_bases
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_knowledge_bases">

Lists the knowledge bases.

```sql
SELECT
name,
description,
knowledge_base_arn,
knowledge_base_id,
knowledge_base_type,
rendering_configuration,
server_side_encryption_configuration,
source_configuration,
status,
tags,
vector_ingestion_configuration
FROM aws.qconnect.knowledge_bases
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Creates a knowledge base. When using this API, you cannot reuse Amazon AppIntegrations DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an InvalidRequestException error. For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following: Call DeleteKnowledgeBase. Call DeleteDataIntegration. Call CreateDataIntegration to recreate the DataIntegration or a create different one. Call CreateKnowledgeBase.

```sql
INSERT INTO aws.qconnect.knowledge_bases (
clientToken,
name,
knowledgeBaseType,
sourceConfiguration,
renderingConfiguration,
vectorIngestionConfiguration,
serverSideEncryptionConfiguration,
description,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ knowledgeBaseType }}' /* required */,
'{{ sourceConfiguration }}',
'{{ renderingConfiguration }}',
'{{ vectorIngestionConfiguration }}',
'{{ serverSideEncryptionConfiguration }}',
'{{ description }}',
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
    - name: knowledgeBaseType
      value: "{{ knowledgeBaseType }}"
      valid_values: ['EXTERNAL', 'CUSTOM', 'QUICK_RESPONSES', 'MESSAGE_TEMPLATES', 'MANAGED']
    - name: sourceConfiguration
      description: |
        Configuration information about the external data source.
      value:
        appIntegrations:
          appIntegrationArn: "{{ appIntegrationArn }}"
          objectFields:
            - "{{ objectFields }}"
        managedSourceConfiguration:
          webCrawlerConfiguration:
            urlConfiguration:
              seedUrls:
                - url: "{{ url }}"
            crawlerLimits:
              rateLimit: {{ rateLimit }}
            inclusionFilters:
              - "{{ inclusionFilters }}"
            exclusionFilters:
              - "{{ exclusionFilters }}"
            scope: "{{ scope }}"
    - name: renderingConfiguration
      description: |
        Information about how to render the content.
      value:
        templateUri: "{{ templateUri }}"
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
        parsingConfiguration:
          parsingStrategy: "{{ parsingStrategy }}"
          bedrockFoundationModelConfiguration:
            modelArn: "{{ modelArn }}"
            parsingPrompt:
              parsingPromptText: "{{ parsingPromptText }}"
    - name: serverSideEncryptionConfiguration
      description: |
        The configuration information for the customer managed key used for encryption.
      value:
        kmsKeyId: "{{ kmsKeyId }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_knowledge_base_template_uri"
    values={[
        { label: 'update_knowledge_base_template_uri', value: 'update_knowledge_base_template_uri' },
        { label: 'remove_knowledge_base_template_uri', value: 'remove_knowledge_base_template_uri' }
    ]}
>
<TabItem value="update_knowledge_base_template_uri">

Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in $&#123;variable&#125; format; this interpolated by Amazon Q in Connect using ingested content. For example, if you ingest a Salesforce article, it has an Id value, and you can set the template URI to https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*$&#123;Id&#125;*/view.

```sql
UPDATE aws.qconnect.knowledge_bases
SET 
templateUri = '{{ templateUri }}'
WHERE 
knowledge_base_id = '{{ knowledge_base_id }}' --required
AND region = '{{ region }}' --required
AND templateUri = '{{ templateUri }}' --required
RETURNING
knowledge_base;
```
</TabItem>
<TabItem value="remove_knowledge_base_template_uri">

Removes a URI template from a knowledge base.

```sql
UPDATE aws.qconnect.knowledge_bases
SET 
-- No updatable properties
WHERE 
knowledge_base_id = '{{ knowledge_base_id }}' --required
AND region = '{{ region }}' --required;
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

Deletes the knowledge base. When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the Amazon AppIntegrations DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See DeleteDataIntegration and CreateDataIntegration in the Amazon AppIntegrations API Reference.

```sql
DELETE FROM aws.qconnect.knowledge_bases
WHERE knowledge_base_id = '{{ knowledge_base_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_import_job"
    values={[
        { label: 'start_import_job', value: 'start_import_job' }
    ]}
>
<TabItem value="start_import_job">

Start an asynchronous job to import Amazon Q in Connect resources from an uploaded source file. Before calling this API, use StartContentUpload to upload an asset that contains the resource data. For importing Amazon Q in Connect quick responses, you need to upload a csv file including the quick responses. For information about how to format the csv file for importing quick responses, see Import quick responses.

```sql
EXEC aws.qconnect.knowledge_bases.start_import_job 
@knowledge_base_id='{{ knowledge_base_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"importJobType": "{{ importJobType }}", 
"uploadId": "{{ uploadId }}", 
"clientToken": "{{ clientToken }}", 
"metadata": "{{ metadata }}", 
"externalSourceConfiguration": "{{ externalSourceConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
