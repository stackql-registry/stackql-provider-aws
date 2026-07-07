--- 
title: environment_vlans
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_vlans
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

Creates, updates, deletes, gets or lists an <code>environment_vlans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_vlans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.evs.environment_vlans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_environment_vlans"
    values={[
        { label: 'list_environment_vlans', value: 'list_environment_vlans' }
    ]}
>
<TabItem value="list_environment_vlans">

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
    <td><CopyableCode code="availabilityZone" /></td>
    <td><code>string</code></td>
    <td>The availability zone of the VLAN.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR block of the VLAN. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24. (pattern: &lt;code&gt;((25&#91;0-5&#93;|2&#91;0-4&#93;&#91;0-9&#93;|&#91;01&#93;?&#91;0-9&#93;&#91;0-9&#93;?)\.)&#123;3&#125;(25&#91;0-5&#93;|2&#91;0-4&#93;&#91;0-9&#93;|&#91;01&#93;?&#91;0-9&#93;&#91;0-9&#93;?)/(3&#91;0-2&#93;|&#91;1-2&#93;&#91;0-9&#93;|&#91;0-9&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the VLAN was created.</td>
</tr>
<tr>
    <td><CopyableCode code="eipAssociations" /></td>
    <td><code>array</code></td>
    <td>An array of Elastic IP address associations.</td>
</tr>
<tr>
    <td><CopyableCode code="functionName" /></td>
    <td><code>string</code></td>
    <td>The VMware VCF traffic type that is carried over the VLAN. For example, a VLAN with a functionName of hcx is being used to carry VMware HCX traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="isPublic" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the VLAN that Amazon EVS provisions is public or private.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the VLAN was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="networkAclId" /></td>
    <td><code>string</code></td>
    <td>A unique ID for a network access control list. (pattern: &lt;code&gt;acl-&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>The state details of the VLAN.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the VLAN subnet. (pattern: &lt;code&gt;subnet-&#91;a-f0-9&#93;&#123;8&#125;(&#91;a-f0-9&#93;&#123;9&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vlanId" /></td>
    <td><code>integer</code></td>
    <td>The unique ID of the VLAN.</td>
</tr>
<tr>
    <td><CopyableCode code="vlanState" /></td>
    <td><code>string</code></td>
    <td>The state of the VLAN. (CREATING, CREATED, DELETING, DELETED, CREATE_FAILED)</td>
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
    <td><a href="#list_environment_vlans"><CopyableCode code="list_environment_vlans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists environment VLANs that are associated with the specified environment.</td>
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
    defaultValue="list_environment_vlans"
    values={[
        { label: 'list_environment_vlans', value: 'list_environment_vlans' }
    ]}
>
<TabItem value="list_environment_vlans">

Lists environment VLANs that are associated with the specified environment.

```sql
SELECT
availabilityZone,
cidr,
createdAt,
eipAssociations,
functionName,
isPublic,
modifiedAt,
networkAclId,
stateDetails,
subnetId,
vlanId,
vlanState
FROM aws.evs.environment_vlans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
