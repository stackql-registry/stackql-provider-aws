--- 
title: sol_network_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - sol_network_instances
  - tnb
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

Creates, updates, deletes, gets or lists a <code>sol_network_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sol_network_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.tnb.sol_network_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sol_network_instance"
    values={[
        { label: 'get_sol_network_instance', value: 'get_sol_network_instance' },
        { label: 'list_sol_network_instances', value: 'list_sol_network_instances' }
    ]}
>
<TabItem value="get_sol_network_instance">

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
    <td>Network instance ID. (pattern: &lt;code&gt;^ni-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Network instance ARN. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-b|aws-us-gov):tnb:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;):\d&#123;12&#125;:(network-instance/ni-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lcmOpInfo" /></td>
    <td><code>object</code></td>
    <td>Lifecycle management operation details on the network instance. Lifecycle management operations are deploy, update, or delete operations.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of a network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</td>
</tr>
<tr>
    <td><CopyableCode code="nsInstanceDescription" /></td>
    <td><code>string</code></td>
    <td>Network instance description.</td>
</tr>
<tr>
    <td><CopyableCode code="nsInstanceName" /></td>
    <td><code>string</code></td>
    <td>Network instance name.</td>
</tr>
<tr>
    <td><CopyableCode code="nsState" /></td>
    <td><code>string</code></td>
    <td>Network instance state. (INSTANTIATED, NOT_INSTANTIATED, UPDATED, IMPAIRED, UPDATE_FAILED, STOPPED, DELETED, INSTANTIATE_IN_PROGRESS, INTENT_TO_UPDATE_IN_PROGRESS, UPDATE_IN_PROGRESS, TERMINATE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdId" /></td>
    <td><code>string</code></td>
    <td>Network service descriptor ID. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdInfoId" /></td>
    <td><code>string</code></td>
    <td>Network service descriptor info ID. (pattern: &lt;code&gt;^np-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sol_network_instances">

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
    <td>ID of the network instance. (pattern: &lt;code&gt;^ni-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Network instance ARN. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-b|aws-us-gov):tnb:(&#91;a-z&#93;&#123;2&#125;(-(gov|isob|iso))?-(east|west|north|south|central)&#123;1,2&#125;-&#91;0-9&#93;):\d&#123;12&#125;:(network-instance/ni-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the network instance.</td>
</tr>
<tr>
    <td><CopyableCode code="nsInstanceDescription" /></td>
    <td><code>string</code></td>
    <td>Human-readable description of the network instance.</td>
</tr>
<tr>
    <td><CopyableCode code="nsInstanceName" /></td>
    <td><code>string</code></td>
    <td>Human-readable name of the network instance.</td>
</tr>
<tr>
    <td><CopyableCode code="nsState" /></td>
    <td><code>string</code></td>
    <td>The state of the network instance. (INSTANTIATED, NOT_INSTANTIATED, UPDATED, IMPAIRED, UPDATE_FAILED, STOPPED, DELETED, INSTANTIATE_IN_PROGRESS, INTENT_TO_UPDATE_IN_PROGRESS, UPDATE_IN_PROGRESS, TERMINATE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdId" /></td>
    <td><code>string</code></td>
    <td>ID of the network service descriptor in the network package. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="nsdInfoId" /></td>
    <td><code>string</code></td>
    <td>ID of the network service descriptor in the network package. (pattern: &lt;code&gt;^np-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_sol_network_instance"><CopyableCode code="get_sol_network_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ns_instance_id"><code>ns_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of the network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</td>
</tr>
<tr>
    <td><a href="#list_sol_network_instances"><CopyableCode code="list_sol_network_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-nextpage_opaque_marker"><code>nextpage_opaque_marker</code></a></td>
    <td>Lists your network instances. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</td>
</tr>
<tr>
    <td><a href="#create_sol_network_instance"><CopyableCode code="create_sol_network_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-nsName"><code>nsName</code></a>, <a href="#parameter-nsdInfoId"><code>nsdInfoId</code></a></td>
    <td></td>
    <td>Creates a network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. Creating a network instance is the third step after creating a network package. For more information about network instances, Network instances in the Amazon Web Services Telco Network Builder User Guide. Once you create a network instance, you can instantiate it. To instantiate a network, see InstantiateSolNetworkInstance.</td>
</tr>
<tr>
    <td><a href="#update_sol_network_instance"><CopyableCode code="update_sol_network_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ns_instance_id"><code>ns_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-updateType"><code>updateType</code></a></td>
    <td></td>
    <td>Update a network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. Choose the updateType parameter to target the necessary update of the network instance.</td>
</tr>
<tr>
    <td><a href="#delete_sol_network_instance"><CopyableCode code="delete_sol_network_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ns_instance_id"><code>ns_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. To delete a network instance, the instance must be in a stopped or terminated state. To terminate a network instance, see TerminateSolNetworkInstance.</td>
</tr>
<tr>
    <td><a href="#terminate_sol_network_instance"><CopyableCode code="terminate_sol_network_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ns_instance_id"><code>ns_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates a network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. You must terminate a network instance before you can delete it.</td>
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
<tr id="parameter-ns_instance_id">
    <td><CopyableCode code="ns_instance_id" /></td>
    <td><code>string</code></td>
    <td>ID of the network instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to include in the response.</td>
</tr>
<tr id="parameter-nextpage_opaque_marker">
    <td><CopyableCode code="nextpage_opaque_marker" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sol_network_instance"
    values={[
        { label: 'get_sol_network_instance', value: 'get_sol_network_instance' },
        { label: 'list_sol_network_instances', value: 'list_sol_network_instances' }
    ]}
>
<TabItem value="get_sol_network_instance">

Gets the details of the network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.

```sql
SELECT
id,
arn,
lcmOpInfo,
metadata,
nsInstanceDescription,
nsInstanceName,
nsState,
nsdId,
nsdInfoId,
tags
FROM aws.tnb.sol_network_instances
WHERE ns_instance_id = '{{ ns_instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sol_network_instances">

Lists your network instances. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.

```sql
SELECT
id,
arn,
metadata,
nsInstanceDescription,
nsInstanceName,
nsState,
nsdId,
nsdInfoId
FROM aws.tnb.sol_network_instances
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND nextpage_opaque_marker = '{{ nextpage_opaque_marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sol_network_instance"
    values={[
        { label: 'create_sol_network_instance', value: 'create_sol_network_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sol_network_instance">

Creates a network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. Creating a network instance is the third step after creating a network package. For more information about network instances, Network instances in the Amazon Web Services Telco Network Builder User Guide. Once you create a network instance, you can instantiate it. To instantiate a network, see InstantiateSolNetworkInstance.

```sql
INSERT INTO aws.tnb.sol_network_instances (
nsDescription,
nsName,
nsdInfoId,
tags,
region
)
SELECT 
'{{ nsDescription }}',
'{{ nsName }}' /* required */,
'{{ nsdInfoId }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
id,
arn,
nsInstanceName,
nsdInfoId,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sol_network_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sol_network_instances resource.
    - name: nsDescription
      value: "{{ nsDescription }}"
    - name: nsName
      value: "{{ nsName }}"
    - name: nsdInfoId
      value: "{{ nsdInfoId }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sol_network_instance"
    values={[
        { label: 'update_sol_network_instance', value: 'update_sol_network_instance' }
    ]}
>
<TabItem value="update_sol_network_instance">

Update a network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. Choose the updateType parameter to target the necessary update of the network instance.

```sql
UPDATE aws.tnb.sol_network_instances
SET 
modifyVnfInfoData = '{{ modifyVnfInfoData }}',
tags = '{{ tags }}',
updateNs = '{{ updateNs }}',
updateType = '{{ updateType }}'
WHERE 
ns_instance_id = '{{ ns_instance_id }}' --required
AND region = '{{ region }}' --required
AND updateType = '{{ updateType }}' --required
RETURNING
nsLcmOpOccId,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sol_network_instance"
    values={[
        { label: 'delete_sol_network_instance', value: 'delete_sol_network_instance' }
    ]}
>
<TabItem value="delete_sol_network_instance">

Deletes a network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. To delete a network instance, the instance must be in a stopped or terminated state. To terminate a network instance, see TerminateSolNetworkInstance.

```sql
DELETE FROM aws.tnb.sol_network_instances
WHERE ns_instance_id = '{{ ns_instance_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="terminate_sol_network_instance"
    values={[
        { label: 'terminate_sol_network_instance', value: 'terminate_sol_network_instance' }
    ]}
>
<TabItem value="terminate_sol_network_instance">

Terminates a network instance. A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. You must terminate a network instance before you can delete it.

```sql
EXEC aws.tnb.sol_network_instances.terminate_sol_network_instance 
@ns_instance_id='{{ ns_instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
