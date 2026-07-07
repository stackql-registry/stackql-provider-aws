--- 
title: links
hide_title: false
hide_table_of_contents: false
keywords:
  - links
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

Creates, updates, deletes, gets or lists a <code>links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_links"
    values={[
        { label: 'get_links', value: 'get_links' }
    ]}
>
<TabItem value="get_links">

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
    <td><CopyableCode code="Bandwidth" /></td>
    <td><code>object</code></td>
    <td>Describes bandwidth information.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the link was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the link. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LinkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the link. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LinkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the link. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the link. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SiteId" /></td>
    <td><code>string</code></td>
    <td>The ID of the site. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the link. (PENDING, AVAILABLE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags for the link.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of the link. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_links"><CopyableCode code="get_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-linkIds"><code>linkIds</code></a>, <a href="#parameter-siteId"><code>siteId</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets information about one or more links in a specified global network. If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</td>
</tr>
<tr>
    <td><a href="#create_link"><CopyableCode code="create_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SiteId"><code>SiteId</code></a></td>
    <td></td>
    <td>Creates a new link for a specified site.</td>
</tr>
<tr>
    <td><a href="#associate_link"><CopyableCode code="associate_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceId"><code>DeviceId</code></a>, <a href="#parameter-LinkId"><code>LinkId</code></a></td>
    <td></td>
    <td>Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.</td>
</tr>
<tr>
    <td><a href="#update_link"><CopyableCode code="update_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the details for an existing link. To remove information for any of the parameters, specify an empty string.</td>
</tr>
<tr>
    <td><a href="#disassociate_link"><CopyableCode code="disassociate_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-deviceId"><code>deviceId</code></a>, <a href="#parameter-linkId"><code>linkId</code></a></td>
    <td>Disassociates an existing device from a link. You must first disassociate any customer gateways that are associated with the link.</td>
</tr>
<tr>
    <td><a href="#delete_link"><CopyableCode code="delete_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing link. You must first disassociate the link from any devices and customer gateways.</td>
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
<tr id="parameter-global_network_id">
    <td><CopyableCode code="global_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network.</td>
</tr>
<tr id="parameter-link_id">
    <td><CopyableCode code="link_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the link.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-deviceId">
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the device.</td>
</tr>
<tr id="parameter-linkId">
    <td><CopyableCode code="linkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the link.</td>
</tr>
<tr id="parameter-linkIds">
    <td><CopyableCode code="linkIds" /></td>
    <td><code>array</code></td>
    <td>One or more link IDs. The maximum is 10.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-provider">
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The link provider.</td>
</tr>
<tr id="parameter-siteId">
    <td><CopyableCode code="siteId" /></td>
    <td><code>string</code></td>
    <td>The ID of the site.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The link type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_links"
    values={[
        { label: 'get_links', value: 'get_links' }
    ]}
>
<TabItem value="get_links">

Gets information about one or more links in a specified global network. If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.

```sql
SELECT
Bandwidth,
CreatedAt,
Description,
GlobalNetworkId,
LinkArn,
LinkId,
Provider,
SiteId,
State,
Tags,
Type
FROM aws.networkmanager.links
WHERE global_network_id = '{{ global_network_id }}' -- required
AND region = '{{ region }}' -- required
AND linkIds = '{{ linkIds }}'
AND siteId = '{{ siteId }}'
AND type = '{{ type }}'
AND provider = '{{ provider }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_link"
    values={[
        { label: 'create_link', value: 'create_link' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_link">

Creates a new link for a specified site.

```sql
INSERT INTO aws.networkmanager.links (
Description,
Type,
Bandwidth,
Provider,
SiteId,
Tags,
global_network_id,
region
)
SELECT 
'{{ Description }}',
'{{ Type }}',
'{{ Bandwidth }}',
'{{ Provider }}',
'{{ SiteId }}' /* required */,
'{{ Tags }}',
'{{ global_network_id }}',
'{{ region }}'
RETURNING
Link
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: links
  props:
    - name: global_network_id
      value: "{{ global_network_id }}"
      description: Required parameter for the links resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the links resource.
    - name: Description
      value: "{{ Description }}"
    - name: Type
      value: "{{ Type }}"
    - name: Bandwidth
      description: |
        Describes bandwidth information.
      value:
        UploadSpeed: {{ UploadSpeed }}
        DownloadSpeed: {{ DownloadSpeed }}
    - name: Provider
      value: "{{ Provider }}"
    - name: SiteId
      value: "{{ SiteId }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_link"
    values={[
        { label: 'associate_link', value: 'associate_link' },
        { label: 'update_link', value: 'update_link' },
        { label: 'disassociate_link', value: 'disassociate_link' }
    ]}
>
<TabItem value="associate_link">

Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.

```sql
UPDATE aws.networkmanager.links
SET 
DeviceId = '{{ DeviceId }}',
LinkId = '{{ LinkId }}'
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND region = '{{ region }}' --required
AND DeviceId = '{{ DeviceId }}' --required
AND LinkId = '{{ LinkId }}' --required
RETURNING
LinkAssociation;
```
</TabItem>
<TabItem value="update_link">

Updates the details for an existing link. To remove information for any of the parameters, specify an empty string.

```sql
UPDATE aws.networkmanager.links
SET 
Description = '{{ Description }}',
Type = '{{ Type }}',
Bandwidth = '{{ Bandwidth }}',
Provider = '{{ Provider }}'
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND link_id = '{{ link_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Link;
```
</TabItem>
<TabItem value="disassociate_link">

Disassociates an existing device from a link. You must first disassociate any customer gateways that are associated with the link.

```sql
UPDATE aws.networkmanager.links
SET 
-- No updatable properties
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND region = '{{ region }}' --required
AND deviceId = '{{ deviceId}}'
AND linkId = '{{ linkId}}'
RETURNING
LinkAssociation;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_link"
    values={[
        { label: 'delete_link', value: 'delete_link' }
    ]}
>
<TabItem value="delete_link">

Deletes an existing link. You must first disassociate the link from any devices and customer gateways.

```sql
DELETE FROM aws.networkmanager.links
WHERE global_network_id = '{{ global_network_id }}' --required
AND link_id = '{{ link_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
