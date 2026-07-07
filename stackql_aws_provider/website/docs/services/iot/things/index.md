--- 
title: things
hide_title: false
hide_table_of_contents: false
keywords:
  - things
  - iot
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

Creates, updates, deletes, gets or lists a <code>things</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="things" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.things" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_thing"
    values={[
        { label: 'describe_thing', value: 'describe_thing' },
        { label: 'list_things', value: 'list_things' }
    ]}
>
<TabItem value="describe_thing">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The thing attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="billingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the billing group the thing belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultClientId" /></td>
    <td><code>string</code></td>
    <td>The default MQTT client ID. For a typical device, the thing name is also used as the default MQTT client ID. Although we don’t require a mapping between a thing's registry name and its use of MQTT client IDs, certificates, or shadow state, we recommend that you choose a thing name and use it as the MQTT client ID for the registry and the Device Shadow service. This lets you better organize your IoT fleet without removing the flexibility of the underlying device certificate model or shadows.</td>
</tr>
<tr>
    <td><CopyableCode code="thingArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the thing to describe.</td>
</tr>
<tr>
    <td><CopyableCode code="thingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the thing to describe.</td>
</tr>
<tr>
    <td><CopyableCode code="thingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="thingTypeName" /></td>
    <td><code>string</code></td>
    <td>The thing type name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The current version of the thing record in the registry. To avoid unintentional changes to the information in the registry, you can pass the version information in the expectedVersion parameter of the UpdateThing and DeleteThing calls.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_things">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A list of thing attributes which are name-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="thingArn" /></td>
    <td><code>string</code></td>
    <td>The thing ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="thingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="thingTypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing type, if the thing has been associated with a type. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the thing record in the registry.</td>
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
    <td><a href="#describe_thing"><CopyableCode code="describe_thing" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified thing. Requires permission to access the DescribeThing action.</td>
</tr>
<tr>
    <td><a href="#list_things"><CopyableCode code="list_things" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-attributeName"><code>attributeName</code></a>, <a href="#parameter-attributeValue"><code>attributeValue</code></a>, <a href="#parameter-thingTypeName"><code>thingTypeName</code></a>, <a href="#parameter-usePrefixAttributeValue"><code>usePrefixAttributeValue</code></a></td>
    <td>Lists your things. Use the attributeName and attributeValue parameters to filter your things. For example, calling ListThings with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute Color with the value Red. For more information, see List Things from the Amazon Web Services IoT Core Developer Guide. Requires permission to access the ListThings action. You will not be charged for calling this API if an Access denied error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</td>
</tr>
<tr>
    <td><a href="#create_thing"><CopyableCode code="create_thing" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a ResourceAlreadyExistsException is thrown. This is a control plane operation. See Authorization for information about authorizing control plane actions. Requires permission to access the CreateThing action.</td>
</tr>
<tr>
    <td><a href="#register_thing"><CopyableCode code="register_thing" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-templateBody"><code>templateBody</code></a></td>
    <td></td>
    <td>Provisions a thing in the device registry. RegisterThing calls other IoT control plane APIs. These calls might exceed your account level IoT Throttling Limits and cause throttle errors. Please contact Amazon Web Services Customer Support to raise your throttling limits if necessary. Requires permission to access the RegisterThing action.</td>
</tr>
<tr>
    <td><a href="#update_thing"><CopyableCode code="update_thing" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the data for a thing. Requires permission to access the UpdateThing action.</td>
</tr>
<tr>
    <td><a href="#delete_thing"><CopyableCode code="delete_thing" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-expectedVersion"><code>expectedVersion</code></a></td>
    <td>Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist. Requires permission to access the DeleteThing action.</td>
</tr>
<tr>
    <td><a href="#start_thing_registration_task"><CopyableCode code="start_thing_registration_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-templateBody"><code>templateBody</code></a>, <a href="#parameter-inputFileBucket"><code>inputFileBucket</code></a>, <a href="#parameter-inputFileKey"><code>inputFileKey</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a bulk thing provisioning task. Requires permission to access the StartThingRegistrationTask action.</td>
</tr>
<tr>
    <td><a href="#stop_thing_registration_task"><CopyableCode code="stop_thing_registration_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a bulk thing provisioning task. Requires permission to access the StopThingRegistrationTask action.</td>
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
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The bulk thing provisioning task ID.</td>
</tr>
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing to delete.</td>
</tr>
<tr id="parameter-attributeName">
    <td><CopyableCode code="attributeName" /></td>
    <td><code>string</code></td>
    <td>The attribute name used to search for things.</td>
</tr>
<tr id="parameter-attributeValue">
    <td><CopyableCode code="attributeValue" /></td>
    <td><code>string</code></td>
    <td>The attribute value used to search for things.</td>
</tr>
<tr id="parameter-expectedVersion">
    <td><CopyableCode code="expectedVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the DeleteThing request is rejected with a VersionConflictException.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-thingTypeName">
    <td><CopyableCode code="thingTypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing type used to search for things.</td>
</tr>
<tr id="parameter-usePrefixAttributeValue">
    <td><CopyableCode code="usePrefixAttributeValue" /></td>
    <td><code>boolean</code></td>
    <td>When true, the action returns the thing resources with attribute values that start with the attributeValue provided. When false, or not present, the action returns only the thing resources with attribute values that match the entire attributeValue provided.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_thing"
    values={[
        { label: 'describe_thing', value: 'describe_thing' },
        { label: 'list_things', value: 'list_things' }
    ]}
>
<TabItem value="describe_thing">

Gets information about the specified thing. Requires permission to access the DescribeThing action.

```sql
SELECT
attributes,
billingGroupName,
defaultClientId,
thingArn,
thingId,
thingName,
thingTypeName,
version
FROM aws.iot.things
WHERE thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_things">

Lists your things. Use the attributeName and attributeValue parameters to filter your things. For example, calling ListThings with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute Color with the value Red. For more information, see List Things from the Amazon Web Services IoT Core Developer Guide. Requires permission to access the ListThings action. You will not be charged for calling this API if an Access denied error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.

```sql
SELECT
attributes,
thingArn,
thingName,
thingTypeName,
version
FROM aws.iot.things
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND attributeName = '{{ attributeName }}'
AND attributeValue = '{{ attributeValue }}'
AND thingTypeName = '{{ thingTypeName }}'
AND usePrefixAttributeValue = '{{ usePrefixAttributeValue }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_thing"
    values={[
        { label: 'create_thing', value: 'create_thing' },
        { label: 'register_thing', value: 'register_thing' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_thing">

Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a ResourceAlreadyExistsException is thrown. This is a control plane operation. See Authorization for information about authorizing control plane actions. Requires permission to access the CreateThing action.

```sql
INSERT INTO aws.iot.things (
thingTypeName,
attributePayload,
billingGroupName,
thing_name,
region
)
SELECT 
'{{ thingTypeName }}',
'{{ attributePayload }}',
'{{ billingGroupName }}',
'{{ thing_name }}',
'{{ region }}'
RETURNING
thingArn,
thingId,
thingName
;
```
</TabItem>
<TabItem value="register_thing">

Provisions a thing in the device registry. RegisterThing calls other IoT control plane APIs. These calls might exceed your account level IoT Throttling Limits and cause throttle errors. Please contact Amazon Web Services Customer Support to raise your throttling limits if necessary. Requires permission to access the RegisterThing action.

```sql
INSERT INTO aws.iot.things (
templateBody,
parameters,
region
)
SELECT 
'{{ templateBody }}' /* required */,
'{{ parameters }}',
'{{ region }}'
RETURNING
certificatePem,
resourceArns
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: things
  props:
    - name: thing_name
      value: "{{ thing_name }}"
      description: Required parameter for the things resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the things resource.
    - name: thingTypeName
      value: "{{ thingTypeName }}"
    - name: attributePayload
      description: |
        The attribute payload.
      value:
        attributes: "{{ attributes }}"
        merge: {{ merge }}
    - name: billingGroupName
      value: "{{ billingGroupName }}"
    - name: templateBody
      value: "{{ templateBody }}"
    - name: parameters
      value: "{{ parameters }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_thing"
    values={[
        { label: 'update_thing', value: 'update_thing' }
    ]}
>
<TabItem value="update_thing">

Updates the data for a thing. Requires permission to access the UpdateThing action.

```sql
UPDATE aws.iot.things
SET 
thingTypeName = '{{ thingTypeName }}',
attributePayload = '{{ attributePayload }}',
expectedVersion = {{ expectedVersion }},
removeThingType = {{ removeThingType }}
WHERE 
thing_name = '{{ thing_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_thing"
    values={[
        { label: 'delete_thing', value: 'delete_thing' }
    ]}
>
<TabItem value="delete_thing">

Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist. Requires permission to access the DeleteThing action.

```sql
DELETE FROM aws.iot.things
WHERE thing_name = '{{ thing_name }}' --required
AND region = '{{ region }}' --required
AND expectedVersion = '{{ expectedVersion }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_thing_registration_task"
    values={[
        { label: 'start_thing_registration_task', value: 'start_thing_registration_task' },
        { label: 'stop_thing_registration_task', value: 'stop_thing_registration_task' }
    ]}
>
<TabItem value="start_thing_registration_task">

Creates a bulk thing provisioning task. Requires permission to access the StartThingRegistrationTask action.

```sql
EXEC aws.iot.things.start_thing_registration_task 
@region='{{ region }}' --required 
@@json=
'{
"templateBody": "{{ templateBody }}", 
"inputFileBucket": "{{ inputFileBucket }}", 
"inputFileKey": "{{ inputFileKey }}", 
"roleArn": "{{ roleArn }}"
}'
;
```
</TabItem>
<TabItem value="stop_thing_registration_task">

Cancels a bulk thing provisioning task. Requires permission to access the StopThingRegistrationTask action.

```sql
EXEC aws.iot.things.stop_thing_registration_task 
@task_id='{{ task_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
