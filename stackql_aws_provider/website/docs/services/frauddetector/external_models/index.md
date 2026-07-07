--- 
title: external_models
hide_title: false
hide_table_of_contents: false
keywords:
  - external_models
  - frauddetector
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

Creates, updates, deletes, gets or lists an <code>external_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="external_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.external_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_external_models"
    values={[
        { label: 'get_external_models', value: 'get_external_models' }
    ]}
>
<TabItem value="get_external_models">

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
    <td><CopyableCode code="externalModels" /></td>
    <td><code>array</code></td>
    <td>Gets the Amazon SageMaker models.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page token to be used in subsequent requests.</td>
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
    <td><a href="#get_external_models"><CopyableCode code="get_external_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning.</td>
</tr>
<tr>
    <td><a href="#put_external_model"><CopyableCode code="put_external_model" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelEndpoint"><code>modelEndpoint</code></a>, <a href="#parameter-modelSource"><code>modelSource</code></a>, <a href="#parameter-invokeModelEndpointRoleArn"><code>invokeModelEndpointRoleArn</code></a>, <a href="#parameter-inputConfiguration"><code>inputConfiguration</code></a>, <a href="#parameter-outputConfiguration"><code>outputConfiguration</code></a>, <a href="#parameter-modelEndpointStatus"><code>modelEndpointStatus</code></a></td>
    <td></td>
    <td>Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.</td>
</tr>
<tr>
    <td><a href="#delete_external_model"><CopyableCode code="delete_external_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a SageMaker model from Amazon Fraud Detector. You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.</td>
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
    defaultValue="get_external_models"
    values={[
        { label: 'get_external_models', value: 'get_external_models' }
    ]}
>
<TabItem value="get_external_models">

Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning.

```sql
SELECT
externalModels,
nextToken
FROM aws.frauddetector.external_models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_external_model"
    values={[
        { label: 'put_external_model', value: 'put_external_model' }
    ]}
>
<TabItem value="put_external_model">

Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.

```sql
REPLACE aws.frauddetector.external_models
SET 
modelEndpoint = '{{ modelEndpoint }}',
modelSource = '{{ modelSource }}',
invokeModelEndpointRoleArn = '{{ invokeModelEndpointRoleArn }}',
inputConfiguration = '{{ inputConfiguration }}',
outputConfiguration = '{{ outputConfiguration }}',
modelEndpointStatus = '{{ modelEndpointStatus }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND modelEndpoint = '{{ modelEndpoint }}' --required
AND modelSource = '{{ modelSource }}' --required
AND invokeModelEndpointRoleArn = '{{ invokeModelEndpointRoleArn }}' --required
AND inputConfiguration = '{{ inputConfiguration }}' --required
AND outputConfiguration = '{{ outputConfiguration }}' --required
AND modelEndpointStatus = '{{ modelEndpointStatus }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_external_model"
    values={[
        { label: 'delete_external_model', value: 'delete_external_model' }
    ]}
>
<TabItem value="delete_external_model">

Removes a SageMaker model from Amazon Fraud Detector. You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.

```sql
DELETE FROM aws.frauddetector.external_models
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
