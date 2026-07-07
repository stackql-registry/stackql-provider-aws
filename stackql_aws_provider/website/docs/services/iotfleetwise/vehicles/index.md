--- 
title: vehicles
hide_title: false
hide_table_of_contents: false
keywords:
  - vehicles
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

Creates, updates, deletes, gets or lists a <code>vehicles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vehicles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.vehicles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vehicle"
    values={[
        { label: 'get_vehicle', value: 'get_vehicle' },
        { label: 'list_vehicles', value: 'list_vehicles' }
    ]}
>
<TabItem value="get_vehicle">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vehicle to retrieve information about.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Static information about a vehicle in a key-value pair. For example: "engineType" : "1.3 L R2"</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="decoderManifestArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a decoder manifest associated with the vehicle.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="modelManifestArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a vehicle model (model manifest) associated with the vehicle.</td>
</tr>
<tr>
    <td><CopyableCode code="stateTemplates" /></td>
    <td><code>array</code></td>
    <td>State templates associated with the vehicle.</td>
</tr>
<tr>
    <td><CopyableCode code="vehicleName" /></td>
    <td><code>string</code></td>
    <td>The ID of the vehicle. (pattern: &lt;code&gt;&#91;a-zA-Z\d\-_:&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vehicles">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vehicle.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Static information about a vehicle in a key-value pair. For example: "engineType" : "1.3 L R2"</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the vehicle was created in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="decoderManifestArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a decoder manifest associated with the vehicle.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the vehicle was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="modelManifestArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a vehicle model (model manifest) associated with the vehicle.</td>
</tr>
<tr>
    <td><CopyableCode code="vehicleName" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the vehicle. (pattern: &lt;code&gt;&#91;a-zA-Z\d\-_:&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_vehicle"><CopyableCode code="get_vehicle" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a vehicle.</td>
</tr>
<tr>
    <td><a href="#list_vehicles"><CopyableCode code="list_vehicles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of summaries of created vehicles. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.</td>
</tr>
<tr>
    <td><a href="#create_vehicle"><CopyableCode code="create_vehicle" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vehicleName"><code>vehicleName</code></a>, <a href="#parameter-modelManifestArn"><code>modelManifestArn</code></a>, <a href="#parameter-decoderManifestArn"><code>decoderManifestArn</code></a></td>
    <td></td>
    <td>Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles created from the same vehicle model consist of the same signals inherited from the vehicle model. If you have an existing Amazon Web Services IoT thing, you can use Amazon Web Services IoT FleetWise to create a vehicle and collect data from your thing. For more information, see Create a vehicle (AWS CLI) in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_vehicle"><CopyableCode code="update_vehicle" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vehicleName"><code>vehicleName</code></a></td>
    <td></td>
    <td>Updates a vehicle. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_vehicle"><CopyableCode code="delete_vehicle" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a vehicle and removes it from any campaigns.</td>
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
    defaultValue="get_vehicle"
    values={[
        { label: 'get_vehicle', value: 'get_vehicle' },
        { label: 'list_vehicles', value: 'list_vehicles' }
    ]}
>
<TabItem value="get_vehicle">

Retrieves information about a vehicle.

```sql
SELECT
arn,
attributes,
creationTime,
decoderManifestArn,
lastModificationTime,
modelManifestArn,
stateTemplates,
vehicleName
FROM aws.iotfleetwise.vehicles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vehicles">

Retrieves a list of summaries of created vehicles. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.

```sql
SELECT
arn,
attributes,
creationTime,
decoderManifestArn,
lastModificationTime,
modelManifestArn,
vehicleName
FROM aws.iotfleetwise.vehicles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vehicle"
    values={[
        { label: 'create_vehicle', value: 'create_vehicle' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vehicle">

Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles created from the same vehicle model consist of the same signals inherited from the vehicle model. If you have an existing Amazon Web Services IoT thing, you can use Amazon Web Services IoT FleetWise to create a vehicle and collect data from your thing. For more information, see Create a vehicle (AWS CLI) in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
INSERT INTO aws.iotfleetwise.vehicles (
vehicleName,
modelManifestArn,
decoderManifestArn,
attributes,
associationBehavior,
tags,
stateTemplates,
region
)
SELECT 
'{{ vehicleName }}' /* required */,
'{{ modelManifestArn }}' /* required */,
'{{ decoderManifestArn }}' /* required */,
'{{ attributes }}',
'{{ associationBehavior }}',
'{{ tags }}',
'{{ stateTemplates }}',
'{{ region }}'
RETURNING
arn,
thingArn,
vehicleName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vehicles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vehicles resource.
    - name: vehicleName
      value: "{{ vehicleName }}"
      description: |
        The unique ID of the vehicle to create.
    - name: modelManifestArn
      value: "{{ modelManifestArn }}"
      description: |
        The Amazon Resource Name ARN of a vehicle model.
    - name: decoderManifestArn
      value: "{{ decoderManifestArn }}"
      description: |
        The ARN of a decoder manifest.
    - name: attributes
      value: "{{ attributes }}"
      description: |
        Static information about a vehicle in a key-value pair. For example: "engineType" : "1.3 L R2" To use attributes with Campaigns or State Templates, you must include them using the request parameters dataExtraDimensions and/or metadataExtraDimensions (for state templates only) when creating your campaign/state template.
    - name: associationBehavior
      value: "{{ associationBehavior }}"
      description: |
        An option to create a new Amazon Web Services IoT thing when creating a vehicle, or to validate an existing Amazon Web Services IoT thing as a vehicle. Default:
      valid_values: ['CreateIotThing', 'ValidateIotThingExists']
    - name: tags
      description: |
        Metadata that can be used to manage the vehicle.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: stateTemplates
      description: |
        Associate state templates with the vehicle. You can monitor the last known state of the vehicle in near real time.
      value:
        - identifier: "{{ identifier }}"
          stateTemplateUpdateStrategy:
            periodic:
              stateTemplateUpdateRate:
                unit: "{{ unit }}"
                value: {{ value }}
            onChange: "{{ onChange }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vehicle"
    values={[
        { label: 'update_vehicle', value: 'update_vehicle' }
    ]}
>
<TabItem value="update_vehicle">

Updates a vehicle. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
UPDATE aws.iotfleetwise.vehicles
SET 
vehicleName = '{{ vehicleName }}',
modelManifestArn = '{{ modelManifestArn }}',
decoderManifestArn = '{{ decoderManifestArn }}',
attributes = '{{ attributes }}',
attributeUpdateMode = '{{ attributeUpdateMode }}',
stateTemplatesToAdd = '{{ stateTemplatesToAdd }}',
stateTemplatesToRemove = '{{ stateTemplatesToRemove }}',
stateTemplatesToUpdate = '{{ stateTemplatesToUpdate }}'
WHERE 
region = '{{ region }}' --required
AND vehicleName = '{{ vehicleName }}' --required
RETURNING
arn,
vehicleName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vehicle"
    values={[
        { label: 'delete_vehicle', value: 'delete_vehicle' }
    ]}
>
<TabItem value="delete_vehicle">

Deletes a vehicle and removes it from any campaigns.

```sql
DELETE FROM aws.iotfleetwise.vehicles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
