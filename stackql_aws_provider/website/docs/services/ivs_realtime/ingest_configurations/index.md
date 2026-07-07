--- 
title: ingest_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - ingest_configurations
  - ivs_realtime
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

Creates, updates, deletes, gets or lists an <code>ingest_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ingest_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs_realtime.ingest_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ingest_configuration"
    values={[
        { label: 'get_ingest_configuration', value: 'get_ingest_configuration' },
        { label: 'list_ingest_configurations', value: 'list_ingest_configurations' }
    ]}
>
<TabItem value="get_ingest_configuration">

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
    <td>Ingest name (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Ingest configuration ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:ingest-configuration/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Application-provided attributes to to store in the IngestConfiguration and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestProtocol" /></td>
    <td><code>string</code></td>
    <td>Type of ingest protocol that the user employs for broadcasting. (RTMP, RTMPS)</td>
</tr>
<tr>
    <td><CopyableCode code="participantId" /></td>
    <td><code>string</code></td>
    <td>ID of the participant within the stage. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="redundantIngest" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether redundant ingest is enabled for the ingest configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="redundantIngestCredentials" /></td>
    <td><code>array</code></td>
    <td>A list of redundant ingest credentials, present only when redundantIngest is set to true. See Redundant Ingest in IVS RTMP Publishing for details.</td>
</tr>
<tr>
    <td><CopyableCode code="stageArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the stage with which the IngestConfiguration is associated. (pattern: &lt;code&gt;^$|^arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:stage/&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the ingest configuration. It is ACTIVE if a publisher currently is publishing to the stage associated with the ingest configuration. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="streamKey" /></td>
    <td><code>string</code></td>
    <td>Ingest-key value for the RTMP(S) protocol. (pattern: &lt;code&gt;rt_&#91;0-9&#93;+_&#91;a-z0-9-&#93;+_&#91;a-zA-Z0-9-&#93;+_.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Best practices and strategies in Tagging AWS Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>Customer-assigned name to help identify the participant using the IngestConfiguration; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ingest_configurations">

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
    <td>Ingest name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Ingest configuration ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:ingest-configuration/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ingestProtocol" /></td>
    <td><code>string</code></td>
    <td>Type of ingest protocol that the user employs for broadcasting. (RTMP, RTMPS)</td>
</tr>
<tr>
    <td><CopyableCode code="participantId" /></td>
    <td><code>string</code></td>
    <td>ID of the participant within the stage. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="redundantIngest" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether redundant ingest is enabled for the ingest configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="stageArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the stage with which the IngestConfiguration is associated. (pattern: &lt;code&gt;^$|^arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:stage/&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the ingest configuration. It is ACTIVE if a publisher currently is publishing to the stage associated with the ingest configuration. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>Customer-assigned name to help identify the participant using the IngestConfiguration; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</td>
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
    <td><a href="#get_ingest_configuration"><CopyableCode code="get_ingest_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified IngestConfiguration.</td>
</tr>
<tr>
    <td><a href="#list_ingest_configurations"><CopyableCode code="list_ingest_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all IngestConfigurations in your account, in the AWS region where the API request is processed.</td>
</tr>
<tr>
    <td><a href="#create_ingest_configuration"><CopyableCode code="create_ingest_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ingestProtocol"><code>ingestProtocol</code></a></td>
    <td></td>
    <td>Creates a new IngestConfiguration resource, used to specify the ingest protocol for a stage.</td>
</tr>
<tr>
    <td><a href="#update_ingest_configuration"><CopyableCode code="update_ingest_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates a specified IngestConfiguration. Only the stage ARN attached to the IngestConfiguration can be updated. An IngestConfiguration that is active cannot be updated.</td>
</tr>
<tr>
    <td><a href="#delete_ingest_configuration"><CopyableCode code="delete_ingest_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified IngestConfiguration, so it can no longer be used to broadcast. An IngestConfiguration cannot be deleted if the publisher is actively streaming to a stage, unless force is set to true.</td>
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
    defaultValue="get_ingest_configuration"
    values={[
        { label: 'get_ingest_configuration', value: 'get_ingest_configuration' },
        { label: 'list_ingest_configurations', value: 'list_ingest_configurations' }
    ]}
>
<TabItem value="get_ingest_configuration">

Gets information about the specified IngestConfiguration.

```sql
SELECT
name,
arn,
attributes,
ingestProtocol,
participantId,
redundantIngest,
redundantIngestCredentials,
stageArn,
state,
streamKey,
tags,
userId
FROM aws.ivs_realtime.ingest_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ingest_configurations">

Lists all IngestConfigurations in your account, in the AWS region where the API request is processed.

```sql
SELECT
name,
arn,
ingestProtocol,
participantId,
redundantIngest,
stageArn,
state,
userId
FROM aws.ivs_realtime.ingest_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ingest_configuration"
    values={[
        { label: 'create_ingest_configuration', value: 'create_ingest_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ingest_configuration">

Creates a new IngestConfiguration resource, used to specify the ingest protocol for a stage.

```sql
INSERT INTO aws.ivs_realtime.ingest_configurations (
name,
stageArn,
userId,
attributes,
ingestProtocol,
insecureIngest,
redundantIngest,
tags,
region
)
SELECT 
'{{ name }}',
'{{ stageArn }}',
'{{ userId }}',
'{{ attributes }}',
'{{ ingestProtocol }}' /* required */,
{{ insecureIngest }},
{{ redundantIngest }},
'{{ tags }}',
'{{ region }}'
RETURNING
ingestConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ingest_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ingest_configurations resource.
    - name: name
      value: "{{ name }}"
    - name: stageArn
      value: "{{ stageArn }}"
    - name: userId
      value: "{{ userId }}"
    - name: attributes
      value: "{{ attributes }}"
    - name: ingestProtocol
      value: "{{ ingestProtocol }}"
      valid_values: ['RTMP', 'RTMPS']
    - name: insecureIngest
      value: {{ insecureIngest }}
    - name: redundantIngest
      value: {{ redundantIngest }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ingest_configuration"
    values={[
        { label: 'update_ingest_configuration', value: 'update_ingest_configuration' }
    ]}
>
<TabItem value="update_ingest_configuration">

Updates a specified IngestConfiguration. Only the stage ARN attached to the IngestConfiguration can be updated. An IngestConfiguration that is active cannot be updated.

```sql
UPDATE aws.ivs_realtime.ingest_configurations
SET 
arn = '{{ arn }}',
stageArn = '{{ stageArn }}',
redundantIngest = {{ redundantIngest }}
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
ingestConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ingest_configuration"
    values={[
        { label: 'delete_ingest_configuration', value: 'delete_ingest_configuration' }
    ]}
>
<TabItem value="delete_ingest_configuration">

Deletes a specified IngestConfiguration, so it can no longer be used to broadcast. An IngestConfiguration cannot be deleted if the publisher is actively streaming to a stage, unless force is set to true.

```sql
DELETE FROM aws.ivs_realtime.ingest_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
