--- 
title: model_manifests
hide_title: false
hide_table_of_contents: false
keywords:
  - model_manifests
  - iotfleetwise
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

Creates, updates, deletes, gets or lists a <code>model_manifests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_manifests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.model_manifests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_manifest"
    values={[
        { label: 'get_model_manifest', value: 'get_model_manifest' },
        { label: 'list_model_manifests', value: 'list_model_manifests' }
    ]}
>
<TabItem value="get_model_manifest">

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
    <td>The name of the vehicle model. (pattern: &lt;code&gt;&#91;a-zA-Z\d\-_:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vehicle model.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the vehicle model was created, in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the vehicle model. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the vehicle model was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="signalCatalogArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signal catalog associated with the vehicle model.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the vehicle model. If the status is ACTIVE, the vehicle model can't be edited. You can edit the vehicle model if the status is marked DRAFT. (ACTIVE, DRAFT, INVALID, VALIDATING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_manifests">

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
    <td>The name of the vehicle model.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vehicle model.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the vehicle model was created, in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the vehicle model. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the vehicle model was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="signalCatalogArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signal catalog associated with the vehicle model.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the vehicle model. If the status is ACTIVE, the vehicle model can't be edited. If the status is DRAFT, you can edit the vehicle model. (ACTIVE, DRAFT, INVALID, VALIDATING)</td>
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
    <td><a href="#get_model_manifest"><CopyableCode code="get_model_manifest" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a vehicle model (model manifest).</td>
</tr>
<tr>
    <td><a href="#list_model_manifests"><CopyableCode code="list_model_manifests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of vehicle models (model manifests). This API operation uses pagination. Specify the nextToken parameter in the request to return more results.</td>
</tr>
<tr>
    <td><a href="#create_model_manifest"><CopyableCode code="create_model_manifest" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nodes"><code>nodes</code></a>, <a href="#parameter-signalCatalogArn"><code>signalCatalogArn</code></a></td>
    <td></td>
    <td>Creates a vehicle model (model manifest) that specifies signals (attributes, branches, sensors, and actuators). For more information, see Vehicle models in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_model_manifest"><CopyableCode code="update_model_manifest" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates a vehicle model (model manifest). If created vehicles are associated with a vehicle model, it can't be updated.</td>
</tr>
<tr>
    <td><a href="#delete_model_manifest"><CopyableCode code="delete_model_manifest" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a vehicle model (model manifest).</td>
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
    defaultValue="get_model_manifest"
    values={[
        { label: 'get_model_manifest', value: 'get_model_manifest' },
        { label: 'list_model_manifests', value: 'list_model_manifests' }
    ]}
>
<TabItem value="get_model_manifest">

Retrieves information about a vehicle model (model manifest).

```sql
SELECT
name,
arn,
creationTime,
description,
lastModificationTime,
signalCatalogArn,
status
FROM aws.iotfleetwise.model_manifests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_manifests">

Retrieves a list of vehicle models (model manifests). This API operation uses pagination. Specify the nextToken parameter in the request to return more results.

```sql
SELECT
name,
arn,
creationTime,
description,
lastModificationTime,
signalCatalogArn,
status
FROM aws.iotfleetwise.model_manifests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model_manifest"
    values={[
        { label: 'create_model_manifest', value: 'create_model_manifest' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_manifest">

Creates a vehicle model (model manifest) that specifies signals (attributes, branches, sensors, and actuators). For more information, see Vehicle models in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
INSERT INTO aws.iotfleetwise.model_manifests (
name,
description,
nodes,
signalCatalogArn,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ nodes }}' /* required */,
'{{ signalCatalogArn }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
name,
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_manifests
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_manifests resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the vehicle model to create.
    - name: description
      value: "{{ description }}"
      description: |
        A brief description of the vehicle model.
    - name: nodes
      value:
        - "{{ nodes }}"
      description: |
        A list of nodes, which are a general abstraction of signals.
    - name: signalCatalogArn
      value: "{{ signalCatalogArn }}"
      description: |
        The Amazon Resource Name (ARN) of a signal catalog.
    - name: tags
      description: |
        Metadata that can be used to manage the vehicle model.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_model_manifest"
    values={[
        { label: 'update_model_manifest', value: 'update_model_manifest' }
    ]}
>
<TabItem value="update_model_manifest">

Updates a vehicle model (model manifest). If created vehicles are associated with a vehicle model, it can't be updated.

```sql
UPDATE aws.iotfleetwise.model_manifests
SET 
name = '{{ name }}',
description = '{{ description }}',
nodesToAdd = '{{ nodesToAdd }}',
nodesToRemove = '{{ nodesToRemove }}',
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
RETURNING
name,
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model_manifest"
    values={[
        { label: 'delete_model_manifest', value: 'delete_model_manifest' }
    ]}
>
<TabItem value="delete_model_manifest">

Deletes a vehicle model (model manifest).

```sql
DELETE FROM aws.iotfleetwise.model_manifests
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
