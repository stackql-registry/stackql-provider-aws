--- 
title: site_to_site_vpn_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - site_to_site_vpn_attachments
  - networkmanager
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

Creates, updates, deletes, gets or lists a <code>site_to_site_vpn_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="site_to_site_vpn_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.site_to_site_vpn_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_site_to_site_vpn_attachment"
    values={[
        { label: 'get_site_to_site_vpn_attachment', value: 'get_site_to_site_vpn_attachment' }
    ]}
>
<TabItem value="get_site_to_site_vpn_attachment">

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
    <td><CopyableCode code="attachment" /></td>
    <td><code>object</code></td>
    <td>Describes a core network attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="vpn_connection_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the site-to-site VPN attachment. (pattern: &lt;code&gt;^arn:&#91;^:&#93;&#123;1,63&#125;:ec2:&#91;^:&#93;&#123;0,63&#125;:&#91;^:&#93;&#123;0,63&#125;:vpn-connection\/vpn-&#91;0-9a-f&#93;&#123;8,17&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_site_to_site_vpn_attachment"><CopyableCode code="get_site_to_site_vpn_attachment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a site-to-site VPN attachment.</td>
</tr>
<tr>
    <td><a href="#create_site_to_site_vpn_attachment"><CopyableCode code="create_site_to_site_vpn_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CoreNetworkId"><code>CoreNetworkId</code></a>, <a href="#parameter-VpnConnectionArn"><code>VpnConnectionArn</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services site-to-site VPN attachment on an edge location of a core network.</td>
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
<tr id="parameter-attachment_id">
    <td><CopyableCode code="attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_site_to_site_vpn_attachment"
    values={[
        { label: 'get_site_to_site_vpn_attachment', value: 'get_site_to_site_vpn_attachment' }
    ]}
>
<TabItem value="get_site_to_site_vpn_attachment">

Returns information about a site-to-site VPN attachment.

```sql
SELECT
attachment,
vpn_connection_arn
FROM aws.networkmanager.site_to_site_vpn_attachments
WHERE attachment_id = '{{ attachment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_site_to_site_vpn_attachment"
    values={[
        { label: 'create_site_to_site_vpn_attachment', value: 'create_site_to_site_vpn_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_site_to_site_vpn_attachment">

Creates an Amazon Web Services site-to-site VPN attachment on an edge location of a core network.

```sql
INSERT INTO aws.networkmanager.site_to_site_vpn_attachments (
CoreNetworkId,
VpnConnectionArn,
RoutingPolicyLabel,
Tags,
ClientToken,
region
)
SELECT 
'{{ CoreNetworkId }}' /* required */,
'{{ VpnConnectionArn }}' /* required */,
'{{ RoutingPolicyLabel }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
site_to_site_vpn_attachment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: site_to_site_vpn_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the site_to_site_vpn_attachments resource.
    - name: CoreNetworkId
      value: "{{ CoreNetworkId }}"
    - name: VpnConnectionArn
      value: "{{ VpnConnectionArn }}"
    - name: RoutingPolicyLabel
      value: "{{ RoutingPolicyLabel }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
