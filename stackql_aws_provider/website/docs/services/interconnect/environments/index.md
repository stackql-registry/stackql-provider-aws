--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - interconnect
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.interconnect.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

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
    <td><CopyableCode code="activation_page_url" /></td>
    <td><code>string</code></td>
    <td>An HTTPS URL on the remote partner portal where the Activation Key should be brought to complete the creation process.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidths" /></td>
    <td><code>object</code></td>
    <td>The sets of bandwidths that are available and supported on this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of this Environment</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The provider specific location on the remote side of this Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>object</code></td>
    <td>The provider on the remote side of this Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_identifier_type" /></td>
    <td><code>string</code></td>
    <td>The type of identifying information that should be supplied to the remoteAccount parameter of a CreateConnection call for this specific Environment. (account, email)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Environment. Possible values: available: The environment is available and new Connection objects can be requested. limited: The environment is available, but overall capacity is limited. The set of available bandwidths unavailable: The environment is currently unavailable. (available, limited, unavailable)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The specific product type of Connection objects provided by this Environment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environments">

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
    <td><CopyableCode code="activation_page_url" /></td>
    <td><code>string</code></td>
    <td>An HTTPS URL on the remote partner portal where the Activation Key should be brought to complete the creation process.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidths" /></td>
    <td><code>object</code></td>
    <td>The sets of bandwidths that are available and supported on this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of this Environment</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The provider specific location on the remote side of this Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>object</code></td>
    <td>The provider on the remote side of this Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_identifier_type" /></td>
    <td><code>string</code></td>
    <td>The type of identifying information that should be supplied to the remoteAccount parameter of a CreateConnection call for this specific Environment. (account, email)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Environment. Possible values: available: The environment is available and new Connection objects can be requested. limited: The environment is available, but overall capacity is limited. The set of available bandwidths unavailable: The environment is currently unavailable. (available, limited, unavailable)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The specific product type of Connection objects provided by this Environment.</td>
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
    <td><a href="#get_environment"><CopyableCode code="get_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a specific Environment</td>
</tr>
<tr>
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the environments that can produce connections that will land in the called AWS region.</td>
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
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

Describes a specific Environment

```sql
SELECT
activation_page_url,
bandwidths,
environment_id,
location,
provider,
remote_identifier_type,
state,
type_
FROM aws.interconnect.environments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environments">

Lists all of the environments that can produce connections that will land in the called AWS region.

```sql
SELECT
activation_page_url,
bandwidths,
environment_id,
location,
provider,
remote_identifier_type,
state,
type_
FROM aws.interconnect.environments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
