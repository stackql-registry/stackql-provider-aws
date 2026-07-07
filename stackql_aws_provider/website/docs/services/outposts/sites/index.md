--- 
title: sites
hide_title: false
hide_table_of_contents: false
keywords:
  - sites
  - outposts
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.sites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_site"
    values={[
        { label: 'get_site', value: 'get_site' },
        { label: 'list_sites', value: 'list_sites' }
    ]}
>
<TabItem value="get_site">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the site. (pattern: &lt;code&gt;^&#91;\S &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the site. (pattern: &lt;code&gt;^&#91;\S &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Notes" /></td>
    <td><code>string</code></td>
    <td>Notes about a site. (pattern: &lt;code&gt;^&#91;\S \n&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingAddressCity" /></td>
    <td><code>string</code></td>
    <td>City where the hardware is installed and powered on. (pattern: &lt;code&gt;^\S&#91;\S &#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingAddressCountryCode" /></td>
    <td><code>string</code></td>
    <td>The ISO-3166 two-letter country code where the hardware is installed and powered on. (pattern: &lt;code&gt;^&#91;A-Z&#93;&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingAddressStateOrRegion" /></td>
    <td><code>string</code></td>
    <td>State or region where the hardware is installed and powered on. (pattern: &lt;code&gt;^\S&#91;\S &#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RackPhysicalProperties" /></td>
    <td><code>object</code></td>
    <td>Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see Network readiness checklist in the Amazon Web Services Outposts User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="SiteArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the site. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:site/(os-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SiteId" /></td>
    <td><code>string</code></td>
    <td>The ID of the site. (pattern: &lt;code&gt;^(arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:site/)?(os-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The site tags.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sites">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the site. (pattern: &lt;code&gt;^&#91;\S &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the site. (pattern: &lt;code&gt;^&#91;\S &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Notes" /></td>
    <td><code>string</code></td>
    <td>Notes about a site. (pattern: &lt;code&gt;^&#91;\S \n&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingAddressCity" /></td>
    <td><code>string</code></td>
    <td>City where the hardware is installed and powered on. (pattern: &lt;code&gt;^\S&#91;\S &#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingAddressCountryCode" /></td>
    <td><code>string</code></td>
    <td>The ISO-3166 two-letter country code where the hardware is installed and powered on. (pattern: &lt;code&gt;^&#91;A-Z&#93;&#123;2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OperatingAddressStateOrRegion" /></td>
    <td><code>string</code></td>
    <td>State or region where the hardware is installed and powered on. (pattern: &lt;code&gt;^\S&#91;\S &#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RackPhysicalProperties" /></td>
    <td><code>object</code></td>
    <td>Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see Network readiness checklist in the Amazon Web Services Outposts User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="SiteArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the site. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:site/(os-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SiteId" /></td>
    <td><code>string</code></td>
    <td>The ID of the site. (pattern: &lt;code&gt;^(arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:site/)?(os-&#91;a-f0-9&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The site tags.</td>
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
    <td><a href="#get_site"><CopyableCode code="get_site" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified Outpost site.</td>
</tr>
<tr>
    <td><a href="#list_sites"><CopyableCode code="list_sites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-OperatingAddressCountryCodeFilter"><code>OperatingAddressCountryCodeFilter</code></a>, <a href="#parameter-OperatingAddressStateOrRegionFilter"><code>OperatingAddressStateOrRegionFilter</code></a>, <a href="#parameter-OperatingAddressCityFilter"><code>OperatingAddressCityFilter</code></a></td>
    <td>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</td>
</tr>
<tr>
    <td><a href="#create_site"><CopyableCode code="create_site" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a site for an Outpost.</td>
</tr>
<tr>
    <td><a href="#update_site"><CopyableCode code="update_site" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified site.</td>
</tr>
<tr>
    <td><a href="#delete_site"><CopyableCode code="delete_site" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified site.</td>
</tr>
<tr>
    <td><a href="#update_site_rack_physical_properties"><CopyableCode code="update_site_rack_physical_properties" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-site_id"><code>site_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see Network readiness checklist in the Amazon Web Services Outposts User Guide. To update a rack at a site with an order of IN_PROGRESS, you must wait for the order to complete or cancel the order.</td>
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
<tr id="parameter-site_id">
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td>The ID or the Amazon Resource Name (ARN) of the site.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-OperatingAddressCityFilter">
    <td><CopyableCode code="OperatingAddressCityFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by city.</td>
</tr>
<tr id="parameter-OperatingAddressCountryCodeFilter">
    <td><CopyableCode code="OperatingAddressCountryCodeFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by country code.</td>
</tr>
<tr id="parameter-OperatingAddressStateOrRegionFilter">
    <td><CopyableCode code="OperatingAddressStateOrRegionFilter" /></td>
    <td><code>array</code></td>
    <td>Filters the results by state or region.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_site"
    values={[
        { label: 'get_site', value: 'get_site' },
        { label: 'list_sites', value: 'list_sites' }
    ]}
>
<TabItem value="get_site">

Gets information about the specified Outpost site.

```sql
SELECT
AccountId,
Description,
Name,
Notes,
OperatingAddressCity,
OperatingAddressCountryCode,
OperatingAddressStateOrRegion,
RackPhysicalProperties,
SiteArn,
SiteId,
Tags
FROM aws.outposts.sites
WHERE site_id = '{{ site_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sites">

Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.

```sql
SELECT
AccountId,
Description,
Name,
Notes,
OperatingAddressCity,
OperatingAddressCountryCode,
OperatingAddressStateOrRegion,
RackPhysicalProperties,
SiteArn,
SiteId,
Tags
FROM aws.outposts.sites
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND OperatingAddressCountryCodeFilter = '{{ OperatingAddressCountryCodeFilter }}'
AND OperatingAddressStateOrRegionFilter = '{{ OperatingAddressStateOrRegionFilter }}'
AND OperatingAddressCityFilter = '{{ OperatingAddressCityFilter }}'
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

Creates a site for an Outpost.

```sql
INSERT INTO aws.outposts.sites (
Name,
Description,
Notes,
Tags,
OperatingAddress,
ShippingAddress,
RackPhysicalProperties,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Notes }}',
'{{ Tags }}',
'{{ OperatingAddress }}',
'{{ ShippingAddress }}',
'{{ RackPhysicalProperties }}',
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
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sites resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the site.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the site.
    - name: Notes
      value: "{{ Notes }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: OperatingAddress
      description: |
        Information about an address.
      value:
        ContactName: "{{ ContactName }}"
        ContactPhoneNumber: "{{ ContactPhoneNumber }}"
        AddressLine1: "{{ AddressLine1 }}"
        AddressLine2: "{{ AddressLine2 }}"
        AddressLine3: "{{ AddressLine3 }}"
        City: "{{ City }}"
        StateOrRegion: "{{ StateOrRegion }}"
        DistrictOrCounty: "{{ DistrictOrCounty }}"
        PostalCode: "{{ PostalCode }}"
        CountryCode: "{{ CountryCode }}"
        Municipality: "{{ Municipality }}"
    - name: ShippingAddress
      description: |
        Information about an address.
      value:
        ContactName: "{{ ContactName }}"
        ContactPhoneNumber: "{{ ContactPhoneNumber }}"
        AddressLine1: "{{ AddressLine1 }}"
        AddressLine2: "{{ AddressLine2 }}"
        AddressLine3: "{{ AddressLine3 }}"
        City: "{{ City }}"
        StateOrRegion: "{{ StateOrRegion }}"
        DistrictOrCounty: "{{ DistrictOrCounty }}"
        PostalCode: "{{ PostalCode }}"
        CountryCode: "{{ CountryCode }}"
        Municipality: "{{ Municipality }}"
    - name: RackPhysicalProperties
      description: |
        Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see Network readiness checklist in the Amazon Web Services Outposts User Guide.
      value:
        PowerDrawKva: "{{ PowerDrawKva }}"
        PowerPhase: "{{ PowerPhase }}"
        PowerConnector: "{{ PowerConnector }}"
        PowerFeedDrop: "{{ PowerFeedDrop }}"
        UplinkGbps: "{{ UplinkGbps }}"
        UplinkCount: "{{ UplinkCount }}"
        FiberOpticCableType: "{{ FiberOpticCableType }}"
        OpticalStandard: "{{ OpticalStandard }}"
        MaximumSupportedWeightLbs: "{{ MaximumSupportedWeightLbs }}"
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

Updates the specified site.

```sql
UPDATE aws.outposts.sites
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
Notes = '{{ Notes }}'
WHERE 
site_id = '{{ site_id }}' --required
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

Deletes the specified site.

```sql
DELETE FROM aws.outposts.sites
WHERE site_id = '{{ site_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_site_rack_physical_properties"
    values={[
        { label: 'update_site_rack_physical_properties', value: 'update_site_rack_physical_properties' }
    ]}
>
<TabItem value="update_site_rack_physical_properties">

Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see Network readiness checklist in the Amazon Web Services Outposts User Guide. To update a rack at a site with an order of IN_PROGRESS, you must wait for the order to complete or cancel the order.

```sql
EXEC aws.outposts.sites.update_site_rack_physical_properties 
@site_id='{{ site_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"PowerDrawKva": "{{ PowerDrawKva }}", 
"PowerPhase": "{{ PowerPhase }}", 
"PowerConnector": "{{ PowerConnector }}", 
"PowerFeedDrop": "{{ PowerFeedDrop }}", 
"UplinkGbps": "{{ UplinkGbps }}", 
"UplinkCount": "{{ UplinkCount }}", 
"FiberOpticCableType": "{{ FiberOpticCableType }}", 
"OpticalStandard": "{{ OpticalStandard }}", 
"MaximumSupportedWeightLbs": "{{ MaximumSupportedWeightLbs }}"
}'
;
```
</TabItem>
</Tabs>
