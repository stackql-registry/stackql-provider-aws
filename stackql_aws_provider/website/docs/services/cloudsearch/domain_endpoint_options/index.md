--- 
title: domain_endpoint_options
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_endpoint_options
  - cloudsearch
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

Creates, updates, deletes, gets or lists a <code>domain_endpoint_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_endpoint_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudsearch.domain_endpoint_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_domain_endpoint_options"
    values={[
        { label: 'describe_domain_endpoint_options', value: 'describe_domain_endpoint_options' }
    ]}
>
<TabItem value="describe_domain_endpoint_options">

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
    <td><CopyableCode code="Options" /></td>
    <td><code>string</code></td>
    <td>The domain endpoint options configured for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the configured domain endpoint options.</td>
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
    <td><a href="#describe_domain_endpoint_options"><CopyableCode code="describe_domain_endpoint_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Deployed"><code>Deployed</code></a></td>
    <td>Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see Configuring Domain Endpoint Options in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_domain_endpoint_options"><CopyableCode code="update_domain_endpoint_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-DomainEndpointOptions"><code>DomainEndpointOptions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see Configuring Domain Endpoint Options in the Amazon CloudSearch Developer Guide.</td>
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
<tr id="parameter-DomainEndpointOptions">
    <td><CopyableCode code="DomainEndpointOptions" /></td>
    <td><code>object</code></td>
    <td>Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07.</td>
</tr>
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>A string that represents the name of a domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Deployed">
    <td><CopyableCode code="Deployed" /></td>
    <td><code>boolean</code></td>
    <td>Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to false.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_domain_endpoint_options"
    values={[
        { label: 'describe_domain_endpoint_options', value: 'describe_domain_endpoint_options' }
    ]}
>
<TabItem value="describe_domain_endpoint_options">

Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see Configuring Domain Endpoint Options in the Amazon CloudSearch Developer Guide.

```sql
SELECT
Options,
Status
FROM aws.cloudsearch.domain_endpoint_options
WHERE DomainName = '{{ DomainName }}' -- required
AND region = '{{ region }}' -- required
AND Deployed = '{{ Deployed }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain_endpoint_options"
    values={[
        { label: 'update_domain_endpoint_options', value: 'update_domain_endpoint_options' }
    ]}
>
<TabItem value="update_domain_endpoint_options">

Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see Configuring Domain Endpoint Options in the Amazon CloudSearch Developer Guide.

```sql
UPDATE aws.cloudsearch.domain_endpoint_options
SET 
-- No updatable properties
WHERE 
DomainName = '{{ DomainName }}' --required
AND DomainEndpointOptions = '{{ DomainEndpointOptions }}' --required
AND region = '{{ region }}' --required
RETURNING
Options,
Status;
```
</TabItem>
</Tabs>
