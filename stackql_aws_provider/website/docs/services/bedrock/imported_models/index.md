--- 
title: imported_models
hide_title: false
hide_table_of_contents: false
keywords:
  - imported_models
  - bedrock
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

Creates, updates, deletes, gets or lists an <code>imported_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="imported_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.imported_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_imported_model"
    values={[
        { label: 'get_imported_model', value: 'get_imported_model' },
        { label: 'list_imported_models', value: 'list_imported_models' }
    ]}
>
<TabItem value="get_imported_model">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the imported model.</td>
</tr>
<tr>
    <td><CopyableCode code="customModelUnits" /></td>
    <td><code>object</code></td>
    <td>Information about the hardware utilization for a single copy of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="instructSupported" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the imported model supports converse.</td>
</tr>
<tr>
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>Job Amazon Resource Name (ARN) associated with the imported model. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:model-import-job/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>Job name associated with the imported model. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9\+\-\.&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modelArchitecture" /></td>
    <td><code>string</code></td>
    <td>The architecture of the imported model.</td>
</tr>
<tr>
    <td><CopyableCode code="modelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with this imported model. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:imported-model/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modelDataSource" /></td>
    <td><code>object</code></td>
    <td>The data source of the model to import.</td>
</tr>
<tr>
    <td><CopyableCode code="modelKmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The imported model is encrypted at rest using this key. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modelName" /></td>
    <td><code>string</code></td>
    <td>The name of the imported model. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_imported_models">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the imported model.</td>
</tr>
<tr>
    <td><CopyableCode code="instructSupported" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the imported model supports converse.</td>
</tr>
<tr>
    <td><CopyableCode code="modelArchitecture" /></td>
    <td><code>string</code></td>
    <td>The architecture of the imported model.</td>
</tr>
<tr>
    <td><CopyableCode code="modelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the imported model. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:imported-model/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modelName" /></td>
    <td><code>string</code></td>
    <td>Name of the imported model. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)+&lt;/code&gt;)</td>
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
    <td><a href="#get_imported_model"><CopyableCode code="get_imported_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-model_identifier"><code>model_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets properties associated with a customized model you imported.</td>
</tr>
<tr>
    <td><a href="#list_imported_models"><CopyableCode code="list_imported_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-creationTimeBefore"><code>creationTimeBefore</code></a>, <a href="#parameter-creationTimeAfter"><code>creationTimeAfter</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Returns a list of models you've imported. You can filter the results to return based on one or more criteria. For more information, see Import a customized model in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_imported_model"><CopyableCode code="delete_imported_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-model_identifier"><code>model_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom model that you imported earlier. For more information, see Import a customized model in the Amazon Bedrock User Guide.</td>
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
<tr id="parameter-model_identifier">
    <td><CopyableCode code="model_identifier" /></td>
    <td><code>string</code></td>
    <td>Name of the imported model to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-creationTimeAfter">
    <td><CopyableCode code="creationTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return imported models that were created after the specified time.</td>
</tr>
<tr id="parameter-creationTimeBefore">
    <td><CopyableCode code="creationTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return imported models that created before the specified time.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Return imported models only if the model name contains these characters.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by in the returned list of imported models.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies whetehr to sort the results in ascending or descending order.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_imported_model"
    values={[
        { label: 'get_imported_model', value: 'get_imported_model' },
        { label: 'list_imported_models', value: 'list_imported_models' }
    ]}
>
<TabItem value="get_imported_model">

Gets properties associated with a customized model you imported.

```sql
SELECT
creationTime,
customModelUnits,
instructSupported,
jobArn,
jobName,
modelArchitecture,
modelArn,
modelDataSource,
modelKmsKeyArn,
modelName
FROM aws.bedrock.imported_models
WHERE model_identifier = '{{ model_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_imported_models">

Returns a list of models you've imported. You can filter the results to return based on one or more criteria. For more information, see Import a customized model in the Amazon Bedrock User Guide.

```sql
SELECT
creationTime,
instructSupported,
modelArchitecture,
modelArn,
modelName
FROM aws.bedrock.imported_models
WHERE region = '{{ region }}' -- required
AND creationTimeBefore = '{{ creationTimeBefore }}'
AND creationTimeAfter = '{{ creationTimeAfter }}'
AND nameContains = '{{ nameContains }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_imported_model"
    values={[
        { label: 'delete_imported_model', value: 'delete_imported_model' }
    ]}
>
<TabItem value="delete_imported_model">

Deletes a custom model that you imported earlier. For more information, see Import a customized model in the Amazon Bedrock User Guide.

```sql
DELETE FROM aws.bedrock.imported_models
WHERE model_identifier = '{{ model_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
