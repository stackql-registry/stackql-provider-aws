--- 
title: state_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - state_templates
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

Creates, updates, deletes, gets or lists a <code>state_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="state_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.state_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_state_template"
    values={[
        { label: 'get_state_template', value: 'get_state_template' },
        { label: 'list_state_templates', value: 'list_state_templates' }
    ]}
>
<TabItem value="get_state_template">

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
    <td>The unique ID of the state template. (pattern: &lt;code&gt;&#91;A-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the state template. (pattern: &lt;code&gt;&#91;a-zA-Z\d\-_:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the state template.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the state template was created in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="data_extra_dimensions" /></td>
    <td><code>array</code></td>
    <td>A list of vehicle attributes associated with the payload published on the state template's MQTT topic. Default: An empty array</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the state template. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the state template was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_extra_dimensions" /></td>
    <td><code>array</code></td>
    <td>A list of vehicle attributes to associate with user properties of the messages published on the state template's MQTT topic. Default: An empty array</td>
</tr>
<tr>
    <td><CopyableCode code="signal_catalog_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signal catalog associated with the state template.</td>
</tr>
<tr>
    <td><CopyableCode code="state_template_properties" /></td>
    <td><code>array</code></td>
    <td>A list of signals from which data is collected. The state template properties contain the fully qualified names of the signals.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_state_templates">

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
    <td>The unique ID of the state template. (pattern: &lt;code&gt;&#91;A-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the state template. (pattern: &lt;code&gt;&#91;a-zA-Z\d\-_:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the state template.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the state template was created, in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the state template. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the state template was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="signal_catalog_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the signal catalog associated with the state template.</td>
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
    <td><a href="#get_state_template"><CopyableCode code="get_state_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a state template. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_state_templates"><CopyableCode code="list_state_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about created state templates. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_state_template"><CopyableCode code="create_state_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-signalCatalogArn"><code>signalCatalogArn</code></a>, <a href="#parameter-stateTemplateProperties"><code>stateTemplateProperties</code></a></td>
    <td></td>
    <td>Creates a state template. State templates contain state properties, which are signals that belong to a signal catalog that is synchronized between the Amazon Web Services IoT FleetWise Edge and the Amazon Web Services Cloud. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_state_template"><CopyableCode code="update_state_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-identifier"><code>identifier</code></a></td>
    <td></td>
    <td>Updates a state template. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_state_template"><CopyableCode code="delete_state_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a state template.</td>
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
    defaultValue="get_state_template"
    values={[
        { label: 'get_state_template', value: 'get_state_template' },
        { label: 'list_state_templates', value: 'list_state_templates' }
    ]}
>
<TabItem value="get_state_template">

Retrieves information about a state template. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
SELECT
id,
name,
arn,
creation_time,
data_extra_dimensions,
description,
last_modification_time,
metadata_extra_dimensions,
signal_catalog_arn,
state_template_properties
FROM aws.iotfleetwise.state_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_state_templates">

Lists information about created state templates. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
SELECT
id,
name,
arn,
creation_time,
description,
last_modification_time,
signal_catalog_arn
FROM aws.iotfleetwise.state_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_state_template"
    values={[
        { label: 'create_state_template', value: 'create_state_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_state_template">

Creates a state template. State templates contain state properties, which are signals that belong to a signal catalog that is synchronized between the Amazon Web Services IoT FleetWise Edge and the Amazon Web Services Cloud. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
INSERT INTO aws.iotfleetwise.state_templates (
name,
description,
signalCatalogArn,
stateTemplateProperties,
dataExtraDimensions,
metadataExtraDimensions,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ signalCatalogArn }}' /* required */,
'{{ stateTemplateProperties }}' /* required */,
'{{ dataExtraDimensions }}',
'{{ metadataExtraDimensions }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: state_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the state_templates resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the state template.
    - name: description
      value: "{{ description }}"
      description: |
        A brief description of the state template.
    - name: signalCatalogArn
      value: "{{ signalCatalogArn }}"
      description: |
        The ARN of the signal catalog associated with the state template.
    - name: stateTemplateProperties
      value:
        - "{{ stateTemplateProperties }}"
      description: |
        A list of signals from which data is collected. The state template properties contain the fully qualified names of the signals.
    - name: dataExtraDimensions
      value:
        - "{{ dataExtraDimensions }}"
      description: |
        A list of vehicle attributes to associate with the payload published on the state template's MQTT topic. (See Processing last known state vehicle data using MQTT messaging). For example, if you add Vehicle.Attributes.Make and Vehicle.Attributes.Model attributes, Amazon Web Services IoT FleetWise will enrich the protobuf encoded payload with those attributes in the extraDimensions field.
    - name: metadataExtraDimensions
      value:
        - "{{ metadataExtraDimensions }}"
      description: |
        A list of vehicle attributes to associate with user properties of the messages published on the state template's MQTT topic. (See Processing last known state vehicle data using MQTT messaging). For example, if you add Vehicle.Attributes.Make and Vehicle.Attributes.Model attributes, Amazon Web Services IoT FleetWise will include these attributes as User Properties with the MQTT message. Default: An empty array
    - name: tags
      description: |
        Metadata that can be used to manage the state template.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_state_template"
    values={[
        { label: 'update_state_template', value: 'update_state_template' }
    ]}
>
<TabItem value="update_state_template">

Updates a state template. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
UPDATE aws.iotfleetwise.state_templates
SET 
identifier = '{{ identifier }}',
description = '{{ description }}',
stateTemplatePropertiesToAdd = '{{ stateTemplatePropertiesToAdd }}',
stateTemplatePropertiesToRemove = '{{ stateTemplatePropertiesToRemove }}',
dataExtraDimensions = '{{ dataExtraDimensions }}',
metadataExtraDimensions = '{{ metadataExtraDimensions }}'
WHERE 
region = '{{ region }}' --required
AND identifier = '{{ identifier }}' --required
RETURNING
id,
name,
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_state_template"
    values={[
        { label: 'delete_state_template', value: 'delete_state_template' }
    ]}
>
<TabItem value="delete_state_template">

Deletes a state template.

```sql
DELETE FROM aws.iotfleetwise.state_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
