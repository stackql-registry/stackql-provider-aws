--- 
title: hub_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - hub_contents
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>hub_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hub_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.hub_contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hub_content"
    values={[
        { label: 'describe_hub_content', value: 'describe_hub_content' },
        { label: 'list_hub_contents', value: 'list_hub_contents' }
    ]}
>
<TabItem value="describe_hub_content">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that hub content was created.</td>
</tr>
<tr>
    <td><CopyableCode code="document_schema_version" /></td>
    <td><code>string</code></td>
    <td>The document schema version for the hub content. (pattern: &lt;code&gt;\d&#123;1,4&#125;.\d&#123;1,4&#125;.\d&#123;1,4&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The failure reason if importing hub content failed.</td>
</tr>
<tr>
    <td><CopyableCode code="hub_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the hub that contains the content. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the hub content. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_dependencies" /></td>
    <td><code>array</code></td>
    <td>The location of any dependencies that the hub content has, such as scripts, model artifacts, datasets, or notebooks.</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_description" /></td>
    <td><code>string</code></td>
    <td>A description of the hub content. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the hub content. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_document" /></td>
    <td><code>string</code></td>
    <td>The hub content document that describes information about the hub content such as type, associated containers, scripts, and more. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_markdown" /></td>
    <td><code>string</code></td>
    <td>A string that provides a description of the hub content. This string can include links, tables, and standard markdown formating.</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_name" /></td>
    <td><code>string</code></td>
    <td>The name of the hub content. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_search_keywords" /></td>
    <td><code>array</code></td>
    <td>The searchable keywords for the hub content.</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_status" /></td>
    <td><code>string</code></td>
    <td>The status of the hub content. (Available, Importing, Deleting, ImportFailed, DeleteFailed, PendingImport, PendingDelete)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_type" /></td>
    <td><code>string</code></td>
    <td>The type of hub content. (Model, Notebook, ModelReference, DataSet, JsonDoc)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_content_version" /></td>
    <td><code>string</code></td>
    <td>The version of the hub content. (pattern: &lt;code&gt;\d&#123;1,4&#125;.\d&#123;1,4&#125;.\d&#123;1,4&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_name" /></td>
    <td><code>string</code></td>
    <td>The name of the hub that contains the content. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time of the hub content.</td>
</tr>
<tr>
    <td><CopyableCode code="reference_min_version" /></td>
    <td><code>string</code></td>
    <td>The minimum version of the hub content. (pattern: &lt;code&gt;\d&#123;1,4&#125;.\d&#123;1,4&#125;.\d&#123;1,4&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sage_maker_public_hub_content_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the public hub content. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:sagemaker:\w+(?:-\w+)+:aws:hub-content\/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;\/Model\/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="support_status" /></td>
    <td><code>string</code></td>
    <td>The support status of the hub content. (Supported, Deprecated, Restricted)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hub_contents">

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
    <td><CopyableCode code="hub_content_summaries" /></td>
    <td><code>array</code></td>
    <td>The summaries of the listed hub content.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content, use it in the subsequent request. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_hub_content"><CopyableCode code="describe_hub_content" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe the content of a hub.</td>
</tr>
<tr>
    <td><a href="#list_hub_contents"><CopyableCode code="list_hub_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the contents of a hub.</td>
</tr>
<tr>
    <td><a href="#create_hub_content_presigned_urls"><CopyableCode code="create_hub_content_presigned_urls" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HubName"><code>HubName</code></a>, <a href="#parameter-HubContentType"><code>HubContentType</code></a>, <a href="#parameter-HubContentName"><code>HubContentName</code></a></td>
    <td></td>
    <td>Creates presigned URLs for accessing hub content artifacts. This operation generates time-limited, secure URLs that allow direct download of model artifacts and associated files from Amazon SageMaker hub content, including gated models that require end-user license agreement acceptance.</td>
</tr>
<tr>
    <td><a href="#create_hub_content_reference"><CopyableCode code="create_hub_content_reference" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HubName"><code>HubName</code></a>, <a href="#parameter-SageMakerPublicHubContentArn"><code>SageMakerPublicHubContentArn</code></a></td>
    <td></td>
    <td>Create a hub content reference in order to add a model in the JumpStart public hub to a private hub.</td>
</tr>
<tr>
    <td><a href="#update_hub_content"><CopyableCode code="update_hub_content" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HubName"><code>HubName</code></a>, <a href="#parameter-HubContentName"><code>HubContentName</code></a>, <a href="#parameter-HubContentType"><code>HubContentType</code></a>, <a href="#parameter-HubContentVersion"><code>HubContentVersion</code></a></td>
    <td></td>
    <td>Updates SageMaker hub content (either a Model or Notebook resource). You can update the metadata that describes the resource. In addition to the required request fields, specify at least one of the following fields to update: HubContentDescription HubContentDisplayName HubContentMarkdown HubContentSearchKeywords SupportStatus For more information about hubs, see Private curated hubs for foundation model access control in JumpStart. If you want to update a ModelReference resource in your hub, use the UpdateHubContentResource API instead.</td>
</tr>
<tr>
    <td><a href="#update_hub_content_reference"><CopyableCode code="update_hub_content_reference" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HubName"><code>HubName</code></a>, <a href="#parameter-HubContentName"><code>HubContentName</code></a>, <a href="#parameter-HubContentType"><code>HubContentType</code></a></td>
    <td></td>
    <td>Updates the contents of a SageMaker hub for a ModelReference resource. A ModelReference allows you to access public SageMaker JumpStart models from within your private hub. When using this API, you can update the MinVersion field for additional flexibility in the model version. You shouldn't update any additional fields when using this API, because the metadata in your private hub should match the public JumpStart model's metadata. If you want to update a Model or Notebook resource in your hub, use the UpdateHubContent API instead. For more information about adding model references to your hub, see Add models to a private hub.</td>
</tr>
<tr>
    <td><a href="#delete_hub_content"><CopyableCode code="delete_hub_content" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the contents of a hub.</td>
</tr>
<tr>
    <td><a href="#delete_hub_content_reference"><CopyableCode code="delete_hub_content_reference" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a hub content reference in order to remove a model from a private hub.</td>
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
    defaultValue="describe_hub_content"
    values={[
        { label: 'describe_hub_content', value: 'describe_hub_content' },
        { label: 'list_hub_contents', value: 'list_hub_contents' }
    ]}
>
<TabItem value="describe_hub_content">

Describe the content of a hub.

```sql
SELECT
creation_time,
document_schema_version,
failure_reason,
hub_arn,
hub_content_arn,
hub_content_dependencies,
hub_content_description,
hub_content_display_name,
hub_content_document,
hub_content_markdown,
hub_content_name,
hub_content_search_keywords,
hub_content_status,
hub_content_type,
hub_content_version,
hub_name,
last_modified_time,
reference_min_version,
sage_maker_public_hub_content_arn,
support_status
FROM aws.sagemaker.hub_contents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hub_contents">

List the contents of a hub.

```sql
SELECT
hub_content_summaries,
next_token
FROM aws.sagemaker.hub_contents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hub_content_presigned_urls"
    values={[
        { label: 'create_hub_content_presigned_urls', value: 'create_hub_content_presigned_urls' },
        { label: 'create_hub_content_reference', value: 'create_hub_content_reference' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hub_content_presigned_urls">

Creates presigned URLs for accessing hub content artifacts. This operation generates time-limited, secure URLs that allow direct download of model artifacts and associated files from Amazon SageMaker hub content, including gated models that require end-user license agreement acceptance.

```sql
INSERT INTO aws.sagemaker.hub_contents (
HubName,
HubContentType,
HubContentName,
HubContentVersion,
AccessConfig,
MaxResults,
NextToken,
region
)
SELECT 
'{{ HubName }}' /* required */,
'{{ HubContentType }}' /* required */,
'{{ HubContentName }}' /* required */,
'{{ HubContentVersion }}',
'{{ AccessConfig }}',
{{ MaxResults }},
'{{ NextToken }}',
'{{ region }}'
RETURNING
authorized_url_configs,
next_token
;
```
</TabItem>
<TabItem value="create_hub_content_reference">

Create a hub content reference in order to add a model in the JumpStart public hub to a private hub.

```sql
INSERT INTO aws.sagemaker.hub_contents (
HubName,
SageMakerPublicHubContentArn,
HubContentName,
MinVersion,
Tags,
region
)
SELECT 
'{{ HubName }}' /* required */,
'{{ SageMakerPublicHubContentArn }}' /* required */,
'{{ HubContentName }}',
'{{ MinVersion }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
hub_arn,
hub_content_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hub_contents
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hub_contents resource.
    - name: HubName
      value: "{{ HubName }}"
      description: |
        The name of the hub to add the hub content reference to.
    - name: HubContentType
      value: "{{ HubContentType }}"
      description: |
        The type of hub content to access. Valid values include Model, Notebook, and ModelReference.
      valid_values: ['Model', 'Notebook', 'ModelReference', 'DataSet', 'JsonDoc']
    - name: HubContentName
      value: "{{ HubContentName }}"
      description: |
        The name of the hub content to reference.
    - name: HubContentVersion
      value: "{{ HubContentVersion }}"
      description: |
        The version of the hub content. If not specified, the latest version is used.
    - name: AccessConfig
      description: |
        Configuration settings for accessing the hub content, including end-user license agreement acceptance for gated models and expected S3 URL validation.
      value:
        AcceptEula: {{ AcceptEula }}
        ExpectedS3Url: "{{ ExpectedS3Url }}"
    - name: MaxResults
      value: {{ MaxResults }}
      description: |
        The maximum number of presigned URLs to return in the response. Default value is 100. Large models may contain hundreds of files, requiring pagination to retrieve all URLs.
    - name: NextToken
      value: "{{ NextToken }}"
      description: |
        A token for pagination. Use this token to retrieve the next set of presigned URLs when the response is truncated.
    - name: SageMakerPublicHubContentArn
      value: "{{ SageMakerPublicHubContentArn }}"
      description: |
        The ARN of the public hub content to reference.
    - name: MinVersion
      value: "{{ MinVersion }}"
      description: |
        The minimum version of the hub content to reference.
    - name: Tags
      description: |
        Any tags associated with the hub content to reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_hub_content"
    values={[
        { label: 'update_hub_content', value: 'update_hub_content' },
        { label: 'update_hub_content_reference', value: 'update_hub_content_reference' }
    ]}
>
<TabItem value="update_hub_content">

Updates SageMaker hub content (either a Model or Notebook resource). You can update the metadata that describes the resource. In addition to the required request fields, specify at least one of the following fields to update: HubContentDescription HubContentDisplayName HubContentMarkdown HubContentSearchKeywords SupportStatus For more information about hubs, see Private curated hubs for foundation model access control in JumpStart. If you want to update a ModelReference resource in your hub, use the UpdateHubContentResource API instead.

```sql
UPDATE aws.sagemaker.hub_contents
SET 
HubName = '{{ HubName }}',
HubContentName = '{{ HubContentName }}',
HubContentType = '{{ HubContentType }}',
HubContentVersion = '{{ HubContentVersion }}',
HubContentDisplayName = '{{ HubContentDisplayName }}',
HubContentDescription = '{{ HubContentDescription }}',
HubContentMarkdown = '{{ HubContentMarkdown }}',
HubContentSearchKeywords = '{{ HubContentSearchKeywords }}',
SupportStatus = '{{ SupportStatus }}'
WHERE 
region = '{{ region }}' --required
AND HubName = '{{ HubName }}' --required
AND HubContentName = '{{ HubContentName }}' --required
AND HubContentType = '{{ HubContentType }}' --required
AND HubContentVersion = '{{ HubContentVersion }}' --required
RETURNING
hub_arn,
hub_content_arn;
```
</TabItem>
<TabItem value="update_hub_content_reference">

Updates the contents of a SageMaker hub for a ModelReference resource. A ModelReference allows you to access public SageMaker JumpStart models from within your private hub. When using this API, you can update the MinVersion field for additional flexibility in the model version. You shouldn't update any additional fields when using this API, because the metadata in your private hub should match the public JumpStart model's metadata. If you want to update a Model or Notebook resource in your hub, use the UpdateHubContent API instead. For more information about adding model references to your hub, see Add models to a private hub.

```sql
UPDATE aws.sagemaker.hub_contents
SET 
HubName = '{{ HubName }}',
HubContentName = '{{ HubContentName }}',
HubContentType = '{{ HubContentType }}',
MinVersion = '{{ MinVersion }}'
WHERE 
region = '{{ region }}' --required
AND HubName = '{{ HubName }}' --required
AND HubContentName = '{{ HubContentName }}' --required
AND HubContentType = '{{ HubContentType }}' --required
RETURNING
hub_arn,
hub_content_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hub_content"
    values={[
        { label: 'delete_hub_content', value: 'delete_hub_content' },
        { label: 'delete_hub_content_reference', value: 'delete_hub_content_reference' }
    ]}
>
<TabItem value="delete_hub_content">

Delete the contents of a hub.

```sql
DELETE FROM aws.sagemaker.hub_contents
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_hub_content_reference">

Delete a hub content reference in order to remove a model from a private hub.

```sql
DELETE FROM aws.sagemaker.hub_contents
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
