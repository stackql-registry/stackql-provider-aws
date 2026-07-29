--- 
title: decoder_manifests
hide_title: false
hide_table_of_contents: false
keywords:
  - decoder_manifests
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

Creates, updates, deletes, gets or lists a <code>decoder_manifests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="decoder_manifests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.decoder_manifests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_decoder_manifest"
    values={[
        { label: 'get_decoder_manifest', value: 'get_decoder_manifest' },
        { label: 'list_decoder_manifests', value: 'list_decoder_manifests' }
    ]}
>
<TabItem value="get_decoder_manifest">

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
    <td>The name of the decoder manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the decoder manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the decoder manifest was created in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the decoder manifest. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the decoder manifest was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The detailed message for the decoder manifest. When a decoder manifest is in an INVALID status, the message contains detailed reason and help information. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_manifest_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a vehicle model (model manifest) associated with the decoder manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the decoder manifest. If the status is ACTIVE, the decoder manifest can't be edited. If the status is marked DRAFT, you can edit the decoder manifest. (ACTIVE, DRAFT, INVALID, VALIDATING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_decoder_manifests">

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
    <td>The name of the decoder manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a vehicle model (model manifest) associated with the decoder manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the decoder manifest was created in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the decoder manifest. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the decoder manifest was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The detailed message for the decoder manifest. When a decoder manifest is in an INVALID status, the message contains detailed reason and help information. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_manifest_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a vehicle model (model manifest) associated with the decoder manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the decoder manifest. If the status is ACTIVE, the decoder manifest can't be edited. If the status is marked DRAFT, you can edit the decoder manifest. (ACTIVE, DRAFT, INVALID, VALIDATING)</td>
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
    <td><a href="#get_decoder_manifest"><CopyableCode code="get_decoder_manifest" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a created decoder manifest.</td>
</tr>
<tr>
    <td><a href="#list_decoder_manifests"><CopyableCode code="list_decoder_manifests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists decoder manifests. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.</td>
</tr>
<tr>
    <td><a href="#create_decoder_manifest"><CopyableCode code="create_decoder_manifest" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-modelManifestArn"><code>modelManifestArn</code></a></td>
    <td></td>
    <td>Creates the decoder manifest associated with a model manifest. To create a decoder manifest, the following must be true: Every signal decoder has a unique name. Each signal decoder is associated with a network interface. Each network interface has a unique ID. The signal decoders are specified in the model manifest.</td>
</tr>
<tr>
    <td><a href="#update_decoder_manifest"><CopyableCode code="update_decoder_manifest" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates a decoder manifest. A decoder manifest can only be updated when the status is DRAFT. Only ACTIVE decoder manifests can be associated with vehicles.</td>
</tr>
<tr>
    <td><a href="#delete_decoder_manifest"><CopyableCode code="delete_decoder_manifest" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a decoder manifest. You can't delete a decoder manifest if it has vehicles associated with it.</td>
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
    defaultValue="get_decoder_manifest"
    values={[
        { label: 'get_decoder_manifest', value: 'get_decoder_manifest' },
        { label: 'list_decoder_manifests', value: 'list_decoder_manifests' }
    ]}
>
<TabItem value="get_decoder_manifest">

Retrieves information about a created decoder manifest.

```sql
SELECT
name,
arn,
creation_time,
description,
last_modification_time,
message,
model_manifest_arn,
status
FROM aws.iotfleetwise.decoder_manifests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_decoder_manifests">

Lists decoder manifests. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.

```sql
SELECT
name,
arn,
creation_time,
description,
last_modification_time,
message,
model_manifest_arn,
status
FROM aws.iotfleetwise.decoder_manifests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_decoder_manifest"
    values={[
        { label: 'create_decoder_manifest', value: 'create_decoder_manifest' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_decoder_manifest">

Creates the decoder manifest associated with a model manifest. To create a decoder manifest, the following must be true: Every signal decoder has a unique name. Each signal decoder is associated with a network interface. Each network interface has a unique ID. The signal decoders are specified in the model manifest.

```sql
INSERT INTO aws.iotfleetwise.decoder_manifests (
name,
description,
modelManifestArn,
signalDecoders,
networkInterfaces,
defaultForUnmappedSignals,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ modelManifestArn }}' /* required */,
'{{ signalDecoders }}',
'{{ networkInterfaces }}',
'{{ defaultForUnmappedSignals }}',
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
- name: decoder_manifests
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the decoder_manifests resource.
    - name: name
      value: "{{ name }}"
      description: |
        The unique name of the decoder manifest to create.
    - name: description
      value: "{{ description }}"
      description: |
        A brief description of the decoder manifest.
    - name: modelManifestArn
      value: "{{ modelManifestArn }}"
      description: |
        The Amazon Resource Name (ARN) of the vehicle model (model manifest).
    - name: signalDecoders
      description: |
        A list of information about signal decoders.
      value:
        - fullyQualifiedName: "{{ fullyQualifiedName }}"
          type_: "{{ type_ }}"
          interfaceId: "{{ interfaceId }}"
          canSignal:
            messageId: {{ messageId }}
            isBigEndian: {{ isBigEndian }}
            isSigned: {{ isSigned }}
            startBit: {{ startBit }}
            offset: {{ offset }}
            factor: {{ factor }}
            length: {{ length }}
            name: "{{ name }}"
            signalValueType: "{{ signalValueType }}"
          obdSignal:
            pidResponseLength: {{ pidResponseLength }}
            serviceMode: {{ serviceMode }}
            pid: {{ pid }}
            scaling: {{ scaling }}
            offset: {{ offset }}
            startByte: {{ startByte }}
            byteLength: {{ byteLength }}
            bitRightShift: {{ bitRightShift }}
            bitMaskLength: {{ bitMaskLength }}
            isSigned: {{ isSigned }}
            signalValueType: "{{ signalValueType }}"
          messageSignal:
            topicName: "{{ topicName }}"
            structuredMessage:
              primitiveMessageDefinition:
                ros2PrimitiveMessageDefinition:
                  primitiveType: "{{ primitiveType }}"
                  offset: {{ offset }}
                  scaling: {{ scaling }}
                  upperBound: {{ upperBound }}
              structuredMessageListDefinition:
                name: "{{ name }}"
                memberType:
                  primitiveMessageDefinition: "{{ primitiveMessageDefinition }}"
                  structuredMessageListDefinition: "{{ structuredMessageListDefinition }}"
                  structuredMessageDefinition: "{{ structuredMessageDefinition }}"
                listType: "{{ listType }}"
                capacity: {{ capacity }}
              structuredMessageDefinition:
                - fieldName: "{{ fieldName }}"
                  dataType:
                    primitiveMessageDefinition: "{{ primitiveMessageDefinition }}"
                    structuredMessageListDefinition: "{{ structuredMessageListDefinition }}"
                    structuredMessageDefinition: "{{ structuredMessageDefinition }}"
          customDecodingSignal:
            id: "{{ id }}"
    - name: networkInterfaces
      description: |
        A list of information about available network interfaces.
      value:
        - interfaceId: "{{ interfaceId }}"
          type_: "{{ type_ }}"
          canInterface:
            name: "{{ name }}"
            protocolName: "{{ protocolName }}"
            protocolVersion: "{{ protocolVersion }}"
          obdInterface:
            name: "{{ name }}"
            requestMessageId: {{ requestMessageId }}
            obdStandard: "{{ obdStandard }}"
            pidRequestIntervalSeconds: {{ pidRequestIntervalSeconds }}
            dtcRequestIntervalSeconds: {{ dtcRequestIntervalSeconds }}
            useExtendedIds: {{ useExtendedIds }}
            hasTransmissionEcu: {{ hasTransmissionEcu }}
          vehicleMiddleware:
            name: "{{ name }}"
            protocolName: "{{ protocolName }}"
          customDecodingInterface:
            name: "{{ name }}"
    - name: defaultForUnmappedSignals
      value: "{{ defaultForUnmappedSignals }}"
      description: |
        Use default decoders for all unmapped signals in the model. You don't need to provide any detailed decoding information. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.
      valid_values: ['CUSTOM_DECODING']
    - name: tags
      description: |
        Metadata that can be used to manage the decoder manifest.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_decoder_manifest"
    values={[
        { label: 'update_decoder_manifest', value: 'update_decoder_manifest' }
    ]}
>
<TabItem value="update_decoder_manifest">

Updates a decoder manifest. A decoder manifest can only be updated when the status is DRAFT. Only ACTIVE decoder manifests can be associated with vehicles.

```sql
UPDATE aws.iotfleetwise.decoder_manifests
SET 
name = '{{ name }}',
description = '{{ description }}',
signalDecodersToAdd = '{{ signalDecodersToAdd }}',
signalDecodersToUpdate = '{{ signalDecodersToUpdate }}',
signalDecodersToRemove = '{{ signalDecodersToRemove }}',
networkInterfacesToAdd = '{{ networkInterfacesToAdd }}',
networkInterfacesToUpdate = '{{ networkInterfacesToUpdate }}',
networkInterfacesToRemove = '{{ networkInterfacesToRemove }}',
status = '{{ status }}',
defaultForUnmappedSignals = '{{ defaultForUnmappedSignals }}'
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
    defaultValue="delete_decoder_manifest"
    values={[
        { label: 'delete_decoder_manifest', value: 'delete_decoder_manifest' }
    ]}
>
<TabItem value="delete_decoder_manifest">

Deletes a decoder manifest. You can't delete a decoder manifest if it has vehicles associated with it.

```sql
DELETE FROM aws.iotfleetwise.decoder_manifests
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
