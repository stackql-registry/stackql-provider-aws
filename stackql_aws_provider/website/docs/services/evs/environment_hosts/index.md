--- 
title: environment_hosts
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_hosts
  - evs
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

Creates, updates, deletes, gets or lists an <code>environment_hosts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_hosts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.evs.environment_hosts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_environment_hosts"
    values={[
        { label: 'list_environment_hosts', value: 'list_environment_hosts' }
    ]}
>
<TabItem value="list_environment_hosts">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the host was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_host_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amazon EC2 Dedicated Host. (pattern: &lt;code&gt;h-&#91;a-f0-9&#93;&#123;8&#125;(&#91;a-f0-9&#93;&#123;9&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ec_2_instance_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the EC2 instance that represents the host.</td>
</tr>
<tr>
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>The DNS hostname of the host. DNS hostnames for hosts must be unique across Amazon EVS environments and within VCF. (pattern: &lt;code&gt;(&#91;a-zA-Z0-9\-&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="host_state" /></td>
    <td><code>string</code></td>
    <td>The state of the host. (CREATING, CREATED, UPDATING, DELETING, DELETED, CREATE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The EC2 instance type of the host. EC2 instances created through Amazon EVS do not support associating an IAM instance profile. (i4i.metal, i7i.metal-24xl)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address of the host. (pattern: &lt;code&gt;(\d&#123;1,3&#125;\.)&#123;3&#125;\d&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td>The name of the SSH key that is used to access the host. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the host was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interfaces" /></td>
    <td><code>array</code></td>
    <td>The elastic network interfaces that are attached to the host.</td>
</tr>
<tr>
    <td><CopyableCode code="placement_group_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the placement group where the host is placed. (pattern: &lt;code&gt;pg-&#91;a-f0-9&#93;&#123;8&#125;(&#91;a-f0-9&#93;&#123;9&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state_details" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the hostState of a host.</td>
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
    <td><a href="#list_environment_hosts"><CopyableCode code="list_environment_hosts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the hosts within an environment.</td>
</tr>
<tr>
    <td><a href="#create_environment_host"><CopyableCode code="create_environment_host" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-host"><code>host</code></a></td>
    <td></td>
    <td>Creates an ESX host and adds it to an Amazon EVS environment. This action can only be used after the Amazon EVS environment is deployed. You can use the dedicatedHostId parameter to specify an Amazon EC2 Dedicated Host for ESX host creation. You can use the placementGroupId parameter to specify a cluster or partition placement group to launch EC2 instances into. If you don't specify an ESX version when adding hosts using CreateEnvironmentHost action, Amazon EVS automatically uses the default ESX version for your environment's VCF version. To find the available ESX versions for a particular VCF version, use the GetVersions action. You cannot use the dedicatedHostId and placementGroupId parameters together in the same CreateEnvironmentHost action. This results in a ValidationException response.</td>
</tr>
<tr>
    <td><a href="#delete_environment_host"><CopyableCode code="delete_environment_host" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a host from an Amazon EVS environment. Before deleting a host, you must unassign and decommission the host from within the SDDC Manager user interface. Not doing so could impact the availability of your virtual machines or result in data loss.</td>
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
    defaultValue="list_environment_hosts"
    values={[
        { label: 'list_environment_hosts', value: 'list_environment_hosts' }
    ]}
>
<TabItem value="list_environment_hosts">

List the hosts within an environment.

```sql
SELECT
created_at,
dedicated_host_id,
ec_2_instance_id,
host_name,
host_state,
instance_type,
ip_address,
key_name,
modified_at,
network_interfaces,
placement_group_id,
state_details
FROM aws.evs.environment_hosts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment_host"
    values={[
        { label: 'create_environment_host', value: 'create_environment_host' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment_host">

Creates an ESX host and adds it to an Amazon EVS environment. This action can only be used after the Amazon EVS environment is deployed. You can use the dedicatedHostId parameter to specify an Amazon EC2 Dedicated Host for ESX host creation. You can use the placementGroupId parameter to specify a cluster or partition placement group to launch EC2 instances into. If you don't specify an ESX version when adding hosts using CreateEnvironmentHost action, Amazon EVS automatically uses the default ESX version for your environment's VCF version. To find the available ESX versions for a particular VCF version, use the GetVersions action. You cannot use the dedicatedHostId and placementGroupId parameters together in the same CreateEnvironmentHost action. This results in a ValidationException response.

```sql
INSERT INTO aws.evs.environment_hosts (
clientToken,
environmentId,
host,
esxVersion,
region
)
SELECT 
'{{ clientToken }}',
'{{ environmentId }}' /* required */,
'{{ host }}' /* required */,
'{{ esxVersion }}',
'{{ region }}'
RETURNING
environment_summary,
host
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environment_hosts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environment_hosts resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect. A unique, case-sensitive identifier that you provide to ensure the idempotency of the host creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
    - name: environmentId
      value: "{{ environmentId }}"
      description: |
        A unique ID for the environment that the host is added to.
    - name: host
      description: |
        An object that represents a host. You cannot use dedicatedHostId and placementGroupId together in the same HostInfoForCreateobject. This results in a ValidationException response.
      value:
        hostName: "{{ hostName }}"
        keyName: "{{ keyName }}"
        instanceType: "{{ instanceType }}"
        placementGroupId: "{{ placementGroupId }}"
        dedicatedHostId: "{{ dedicatedHostId }}"
    - name: esxVersion
      value: "{{ esxVersion }}"
      description: |
        The ESX version to use for the host.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_host"
    values={[
        { label: 'delete_environment_host', value: 'delete_environment_host' }
    ]}
>
<TabItem value="delete_environment_host">

Deletes a host from an Amazon EVS environment. Before deleting a host, you must unassign and decommission the host from within the SDDC Manager user interface. Not doing so could impact the availability of your virtual machines or result in data loss.

```sql
DELETE FROM aws.evs.environment_hosts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
