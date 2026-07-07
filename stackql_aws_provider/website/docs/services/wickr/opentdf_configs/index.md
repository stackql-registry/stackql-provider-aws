--- 
title: opentdf_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - opentdf_configs
  - wickr
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

Creates, updates, deletes, gets or lists an <code>opentdf_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="opentdf_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.opentdf_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_opentdf_config"
    values={[
        { label: 'get_opentdf_config', value: 'get_opentdf_config' }
    ]}
>
<TabItem value="get_opentdf_config">

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
    <td><CopyableCode code="clientId" /></td>
    <td><code>string</code></td>
    <td>The OIDC client ID used for authenticating with the OpenTDF provider. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clientSecret" /></td>
    <td><code>string</code></td>
    <td>The OIDC client secret used for authenticating with the OpenTDF provider. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain of the OpenTDF server. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the OpenTDF platform. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_opentdf_config"><CopyableCode code="get_opentdf_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the OpenTDF integration configuration for a Wickr network.</td>
</tr>
<tr>
    <td><a href="#register_opentdf_config"><CopyableCode code="register_opentdf_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientId"><code>clientId</code></a>, <a href="#parameter-clientSecret"><code>clientSecret</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-provider"><code>provider</code></a></td>
    <td><a href="#parameter-dryRun"><code>dryRun</code></a></td>
    <td>Registers and saves OpenTDF configuration for a Wickr network, enabling attribute-based access control for Wickr through an OpenTDF provider.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Wickr network for which OpenTDF integration will be configured.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-dryRun">
    <td><CopyableCode code="dryRun" /></td>
    <td><code>boolean</code></td>
    <td>Perform dry-run test connection of OpenTDF configuration (optional).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_opentdf_config"
    values={[
        { label: 'get_opentdf_config', value: 'get_opentdf_config' }
    ]}
>
<TabItem value="get_opentdf_config">

Retrieves the OpenTDF integration configuration for a Wickr network.

```sql
SELECT
clientId,
clientSecret,
domain,
provider
FROM aws.wickr.opentdf_configs
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_opentdf_config"
    values={[
        { label: 'register_opentdf_config', value: 'register_opentdf_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_opentdf_config">

Registers and saves OpenTDF configuration for a Wickr network, enabling attribute-based access control for Wickr through an OpenTDF provider.

```sql
INSERT INTO aws.wickr.opentdf_configs (
clientId,
clientSecret,
domain,
provider,
network_id,
region,
dryRun
)
SELECT 
'{{ clientId }}' /* required */,
'{{ clientSecret }}' /* required */,
'{{ domain }}' /* required */,
'{{ provider }}' /* required */,
'{{ network_id }}',
'{{ region }}',
'{{ dryRun }}'
RETURNING
clientId,
clientSecret,
domain,
provider
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: opentdf_configs
  props:
    - name: network_id
      value: "{{ network_id }}"
      description: Required parameter for the opentdf_configs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the opentdf_configs resource.
    - name: clientId
      value: "{{ clientId }}"
    - name: clientSecret
      value: "{{ clientSecret }}"
    - name: domain
      value: "{{ domain }}"
    - name: provider
      value: "{{ provider }}"
    - name: dryRun
      value: {{ dryRun }}
      description: Perform dry-run test connection of OpenTDF configuration (optional).
      description: Perform dry-run test connection of OpenTDF configuration (optional).
`}</CodeBlock>

</TabItem>
</Tabs>
