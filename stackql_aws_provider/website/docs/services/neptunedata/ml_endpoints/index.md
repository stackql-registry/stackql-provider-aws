--- 
title: ml_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - ml_endpoints
  - neptunedata
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

Creates, updates, deletes, gets or lists a <code>ml_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ml_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.ml_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ml_endpoint"
    values={[
        { label: 'get_ml_endpoint', value: 'get_ml_endpoint' },
        { label: 'list_ml_endpoints', value: 'list_ml_endpoints' }
    ]}
>
<TabItem value="get_ml_endpoint">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the inference endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>object</code></td>
    <td>The endpoint definition.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointConfig" /></td>
    <td><code>object</code></td>
    <td>Contains a Neptune ML configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the inference endpoint.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ml_endpoints">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A page from the list of inference endpoint IDs.</td>
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
    <td><a href="#get_ml_endpoint"><CopyableCode code="get_ml_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-neptuneIamRoleArn"><code>neptuneIamRoleArn</code></a></td>
    <td>Retrieves details about an inference endpoint. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetMLEndpointStatus IAM action in that cluster.</td>
</tr>
<tr>
    <td><a href="#list_ml_endpoints"><CopyableCode code="list_ml_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxItems"><code>maxItems</code></a>, <a href="#parameter-neptuneIamRoleArn"><code>neptuneIamRoleArn</code></a></td>
    <td>Lists existing inference endpoints. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ListMLEndpoints IAM action in that cluster.</td>
</tr>
<tr>
    <td><a href="#create_ml_endpoint"><CopyableCode code="create_ml_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new Neptune ML inference endpoint that lets you query one specific model that the model-training process constructed. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CreateMLEndpoint IAM action in that cluster.</td>
</tr>
<tr>
    <td><a href="#delete_ml_endpoint"><CopyableCode code="delete_ml_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-neptuneIamRoleArn"><code>neptuneIamRoleArn</code></a>, <a href="#parameter-clean"><code>clean</code></a></td>
    <td>Cancels the creation of a Neptune ML inference endpoint. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:DeleteMLEndpoint IAM action in that cluster.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the inference endpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clean">
    <td><CopyableCode code="clean" /></td>
    <td><code>boolean</code></td>
    <td>If this flag is set to TRUE, all Neptune ML S3 artifacts should be deleted when the job is stopped. The default is FALSE.</td>
</tr>
<tr id="parameter-maxItems">
    <td><CopyableCode code="maxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return (from 1 to 1024; the default is 10.</td>
</tr>
<tr id="parameter-neptuneIamRoleArn">
    <td><CopyableCode code="neptuneIamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of an IAM role providing Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will be thrown.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ml_endpoint"
    values={[
        { label: 'get_ml_endpoint', value: 'get_ml_endpoint' },
        { label: 'list_ml_endpoints', value: 'list_ml_endpoints' }
    ]}
>
<TabItem value="get_ml_endpoint">

Retrieves details about an inference endpoint. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetMLEndpointStatus IAM action in that cluster.

```sql
SELECT
id,
endpoint,
endpointConfig,
status
FROM aws.neptunedata.ml_endpoints
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND neptuneIamRoleArn = '{{ neptuneIamRoleArn }}'
;
```
</TabItem>
<TabItem value="list_ml_endpoints">

Lists existing inference endpoints. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ListMLEndpoints IAM action in that cluster.

```sql
SELECT
id
FROM aws.neptunedata.ml_endpoints
WHERE region = '{{ region }}' -- required
AND maxItems = '{{ maxItems }}'
AND neptuneIamRoleArn = '{{ neptuneIamRoleArn }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ml_endpoint"
    values={[
        { label: 'create_ml_endpoint', value: 'create_ml_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ml_endpoint">

Creates a new Neptune ML inference endpoint that lets you query one specific model that the model-training process constructed. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CreateMLEndpoint IAM action in that cluster.

```sql
INSERT INTO aws.neptunedata.ml_endpoints (
id,
mlModelTrainingJobId,
mlModelTransformJobId,
update,
neptuneIamRoleArn,
modelName,
instanceType,
instanceCount,
volumeEncryptionKMSKey,
region
)
SELECT 
'{{ id }}',
'{{ mlModelTrainingJobId }}',
'{{ mlModelTransformJobId }}',
{{ update }},
'{{ neptuneIamRoleArn }}',
'{{ modelName }}',
'{{ instanceType }}',
{{ instanceCount }},
'{{ volumeEncryptionKMSKey }}',
'{{ region }}'
RETURNING
id,
arn,
creationTimeInMillis
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ml_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ml_endpoints resource.
    - name: id
      value: "{{ id }}"
    - name: mlModelTrainingJobId
      value: "{{ mlModelTrainingJobId }}"
    - name: mlModelTransformJobId
      value: "{{ mlModelTransformJobId }}"
    - name: update
      value: {{ update }}
    - name: neptuneIamRoleArn
      value: "{{ neptuneIamRoleArn }}"
    - name: modelName
      value: "{{ modelName }}"
    - name: instanceType
      value: "{{ instanceType }}"
    - name: instanceCount
      value: {{ instanceCount }}
    - name: volumeEncryptionKMSKey
      value: "{{ volumeEncryptionKMSKey }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ml_endpoint"
    values={[
        { label: 'delete_ml_endpoint', value: 'delete_ml_endpoint' }
    ]}
>
<TabItem value="delete_ml_endpoint">

Cancels the creation of a Neptune ML inference endpoint. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:DeleteMLEndpoint IAM action in that cluster.

```sql
DELETE FROM aws.neptunedata.ml_endpoints
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND neptuneIamRoleArn = '{{ neptuneIamRoleArn }}'
AND clean = '{{ clean }}'
;
```
</TabItem>
</Tabs>
