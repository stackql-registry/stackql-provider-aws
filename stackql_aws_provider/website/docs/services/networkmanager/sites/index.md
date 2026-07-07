--- 
title: sites
hide_title: false
hide_table_of_contents: false
keywords:
  - sites
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

Creates, updates, deletes, gets or lists a <code>sites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.sites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sites"
    values={[
        { label: 'get_sites', value: 'get_sites' }
    ]}
>
<TabItem value="get_sites">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the site was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the site. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Location" /></td>
    <td><code>object</code></td>
    <td>Describes a location.</td>
</tr>
<tr>
    <td><CopyableCode code="SiteArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the site. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SiteId" /></td>
    <td><code>string</code></td>
    <td>The ID of the site. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the site. (PENDING, AVAILABLE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags for the site.</td>
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
    <td><a href="#get_sites"><CopyableCode code="get_sites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-siteIds"><code>siteIds</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets information about one or more of your sites in a global network.</td>
</tr>
<tr>
    <td><a href="#create_site"><CopyableCode code="create_site" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new site in a global network.</td>
</tr>
<tr>
    <td><a href="#update_site"><CopyableCode code="update_site" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the information for an existing site. To remove information for any of the parameters, specify an empty string.</td>
</tr>
<tr>
    <td><a href="#delete_site"><CopyableCode code="delete_site" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing site. The site cannot be associated with any device or link.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the site.</td>
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
<tr id="parameter-siteIds">
    <td><CopyableCode code="siteIds" /></td>
    <td><code>array</code></td>
    <td>One or more site IDs. The maximum is 10.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sites"
    values={[
        { label: 'get_sites', value: 'get_sites' }
    ]}
>
<TabItem value="get_sites">

Gets information about one or more of your sites in a global network.

```sql
SELECT
CreatedAt,
Description,
GlobalNetworkId,
Location,
SiteArn,
SiteId,
State,
Tags
FROM aws.networkmanager.sites
WHERE global_network_id = '{{ global_network_id }}' -- required
AND region = '{{ region }}' -- required
AND siteIds = '{{ siteIds }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_site"
    values={[
        { label: 'create_site', value: 'create_site' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_site">

Creates a new site in a global network.

```sql
INSERT INTO aws.networkmanager.sites (
Description,
Location,
Tags,
global_network_id,
region
)
SELECT 
'{{ Description }}',
'{{ Location }}',
'{{ Tags }}',
'{{ global_network_id }}',
'{{ region }}'
RETURNING
Site
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sites
  props:
    - name: global_network_id
      value: "{{ global_network_id }}"
      description: Required parameter for the sites resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sites resource.
    - name: Description
      value: "{{ Description }}"
    - name: Location
      description: |
        Describes a location.
      value:
        Address: "{{ Address }}"
        Latitude: "{{ Latitude }}"
        Longitude: "{{ Longitude }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_site"
    values={[
        { label: 'update_site', value: 'update_site' }
    ]}
>
<TabItem value="update_site">

Updates the information for an existing site. To remove information for any of the parameters, specify an empty string.

```sql
UPDATE aws.networkmanager.sites
SET 
Description = '{{ Description }}',
Location = '{{ Location }}'
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND site_id = '{{ site_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Site;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_site"
    values={[
        { label: 'delete_site', value: 'delete_site' }
    ]}
>
<TabItem value="delete_site">

Deletes an existing site. The site cannot be associated with any device or link.

```sql
DELETE FROM aws.networkmanager.sites
WHERE global_network_id = '{{ global_network_id }}' --required
AND site_id = '{{ site_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
