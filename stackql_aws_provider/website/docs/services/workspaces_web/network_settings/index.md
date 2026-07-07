--- 
title: network_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - network_settings
  - workspaces_web
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

Creates, updates, deletes, gets or lists a <code>network_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.network_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_settings"
    values={[
        { label: 'get_network_settings', value: 'get_network_settings' },
        { label: 'list_network_settings', value: 'list_network_settings' }
    ]}
>
<TabItem value="get_network_settings">

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
    <td><CopyableCode code="associatedPortalArns" /></td>
    <td><code>array</code></td>
    <td>A list of web portal ARNs that this network settings is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="networkSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the network settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="securityGroupIds" /></td>
    <td><code>array</code></td>
    <td>One or more security groups used to control access from streaming instances to your VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The subnets in which network interfaces are created to connect streaming instances to your VPC. At least two of these subnets must be in different availability zones.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcId" /></td>
    <td><code>string</code></td>
    <td>The VPC that streaming instances will connect to. (pattern: &lt;code&gt;vpc-&#91;0-9a-z&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_network_settings">

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
    <td><CopyableCode code="networkSettings" /></td>
    <td><code>array</code></td>
    <td>The network settings.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#get_network_settings"><CopyableCode code="get_network_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_settings_arn"><code>network_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the network settings.</td>
</tr>
<tr>
    <td><a href="#list_network_settings"><CopyableCode code="list_network_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of network settings.</td>
</tr>
<tr>
    <td><a href="#create_network_settings"><CopyableCode code="create_network_settings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vpcId"><code>vpcId</code></a>, <a href="#parameter-subnetIds"><code>subnetIds</code></a>, <a href="#parameter-securityGroupIds"><code>securityGroupIds</code></a></td>
    <td></td>
    <td>Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.</td>
</tr>
<tr>
    <td><a href="#associate_network_settings"><CopyableCode code="associate_network_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-networkSettingsArn"><code>networkSettingsArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a network settings resource with a web portal.</td>
</tr>
<tr>
    <td><a href="#disassociate_network_settings"><CopyableCode code="disassociate_network_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates network settings from a web portal.</td>
</tr>
<tr>
    <td><a href="#update_network_settings"><CopyableCode code="update_network_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_settings_arn"><code>network_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates network settings.</td>
</tr>
<tr>
    <td><a href="#delete_network_settings"><CopyableCode code="delete_network_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_settings_arn"><code>network_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes network settings.</td>
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
<tr id="parameter-networkSettingsArn">
    <td><CopyableCode code="networkSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the network settings.</td>
</tr>
<tr id="parameter-network_settings_arn">
    <td><CopyableCode code="network_settings_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the network settings.</td>
</tr>
<tr id="parameter-portal_arn">
    <td><CopyableCode code="portal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the web portal.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be included in the next page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_network_settings"
    values={[
        { label: 'get_network_settings', value: 'get_network_settings' },
        { label: 'list_network_settings', value: 'list_network_settings' }
    ]}
>
<TabItem value="get_network_settings">

Gets the network settings.

```sql
SELECT
associatedPortalArns,
networkSettingsArn,
securityGroupIds,
subnetIds,
vpcId
FROM aws.workspaces_web.network_settings
WHERE network_settings_arn = '{{ network_settings_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_network_settings">

Retrieves a list of network settings.

```sql
SELECT
networkSettings,
nextToken
FROM aws.workspaces_web.network_settings
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_settings"
    values={[
        { label: 'create_network_settings', value: 'create_network_settings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_settings">

Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.

```sql
INSERT INTO aws.workspaces_web.network_settings (
vpcId,
subnetIds,
securityGroupIds,
tags,
clientToken,
region
)
SELECT 
'{{ vpcId }}' /* required */,
'{{ subnetIds }}' /* required */,
'{{ securityGroupIds }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
networkSettingsArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_settings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_settings resource.
    - name: vpcId
      value: "{{ vpcId }}"
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
    - name: securityGroupIds
      value:
        - "{{ securityGroupIds }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_network_settings"
    values={[
        { label: 'associate_network_settings', value: 'associate_network_settings' },
        { label: 'disassociate_network_settings', value: 'disassociate_network_settings' },
        { label: 'update_network_settings', value: 'update_network_settings' }
    ]}
>
<TabItem value="associate_network_settings">

Associates a network settings resource with a web portal.

```sql
UPDATE aws.workspaces_web.network_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND networkSettingsArn = '{{ networkSettingsArn }}' --required
AND region = '{{ region }}' --required
RETURNING
networkSettingsArn,
portalArn;
```
</TabItem>
<TabItem value="disassociate_network_settings">

Disassociates network settings from a web portal.

```sql
UPDATE aws.workspaces_web.network_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_network_settings">

Updates network settings.

```sql
UPDATE aws.workspaces_web.network_settings
SET 
vpcId = '{{ vpcId }}',
subnetIds = '{{ subnetIds }}',
securityGroupIds = '{{ securityGroupIds }}',
clientToken = '{{ clientToken }}'
WHERE 
network_settings_arn = '{{ network_settings_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
networkSettings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_settings"
    values={[
        { label: 'delete_network_settings', value: 'delete_network_settings' }
    ]}
>
<TabItem value="delete_network_settings">

Deletes network settings.

```sql
DELETE FROM aws.workspaces_web.network_settings
WHERE network_settings_arn = '{{ network_settings_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
