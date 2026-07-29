--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - migration_hub_refactor_spaces
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migration_hub_refactor_spaces.environments" /></td></tr>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment. (pattern: &lt;code&gt;^arn:aws:refactor-spaces:&#91;a-zA-Z0-9\-&#93;+:\w&#123;12&#125;:&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the environment is created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_\s\.\!\*\#\@\'&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the environment. (pattern: &lt;code&gt;^env-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Any error associated with the environment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the environment was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. (pattern: &lt;code&gt;^(?!env-)&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9-_ &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_fabric_type" /></td>
    <td><code>string</code></td>
    <td>The network fabric type of the environment. (TRANSIT_GATEWAY, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the environment owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the environment. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags to assign to the environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Transit Gateway set up by the environment, if applicable. (pattern: &lt;code&gt;^tgw-&#91;-a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment. (pattern: &lt;code&gt;^arn:aws:refactor-spaces:&#91;a-zA-Z0-9\-&#93;+:\w&#123;12&#125;:&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the environment is created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_\s\.\!\*\#\@\'&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the environment. (pattern: &lt;code&gt;^env-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Any error associated with the environment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the environment was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. (pattern: &lt;code&gt;^(?!env-)&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9-_ &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_fabric_type" /></td>
    <td><code>string</code></td>
    <td>The network fabric type of the environment. (TRANSIT_GATEWAY, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the environment owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the environment. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Transit Gateway set up by the environment. (pattern: &lt;code&gt;^tgw-&#91;-a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon Web Services Migration Hub Refactor Spaces environment.</td>
</tr>
<tr>
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists Amazon Web Services Migration Hub Refactor Spaces environments owned by a caller account or shared with the caller account.</td>
</tr>
<tr>
    <td><a href="#create_environment"><CopyableCode code="create_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NetworkFabricType"><code>NetworkFabricType</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services Migration Hub Refactor Spaces environment. The caller owns the environment resource, and all Refactor Spaces applications, services, and routes created within the environment. They are referred to as the environment owner. The environment owner has cross-account visibility and control of Refactor Spaces resources that are added to the environment by other accounts that the environment is shared with. When creating an environment with a CreateEnvironment:NetworkFabricType of TRANSIT_GATEWAY, Refactor Spaces provisions a transit gateway to enable services in VPCs to communicate directly across accounts. If CreateEnvironment:NetworkFabricType is NONE, Refactor Spaces does not create a transit gateway and you must use your network infrastructure to route traffic to services with private URL endpoints.</td>
</tr>
<tr>
    <td><a href="#delete_environment"><CopyableCode code="delete_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Web Services Migration Hub Refactor Spaces environment. Before you can delete an environment, you must first delete any applications and services within the environment.</td>
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
<tr id="parameter-environment_identifier">
    <td><CopyableCode code="environment_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
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

Gets an Amazon Web Services Migration Hub Refactor Spaces environment.

```sql
SELECT
arn,
created_time,
description,
environment_id,
error,
last_updated_time,
name,
network_fabric_type,
owner_account_id,
state,
tags,
transit_gateway_id
FROM aws.migration_hub_refactor_spaces.environments
WHERE environment_identifier = '{{ environment_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environments">

Lists Amazon Web Services Migration Hub Refactor Spaces environments owned by a caller account or shared with the caller account.

```sql
SELECT
arn,
created_time,
description,
environment_id,
error,
last_updated_time,
name,
network_fabric_type,
owner_account_id,
state,
tags,
transit_gateway_id
FROM aws.migration_hub_refactor_spaces.environments
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment"
    values={[
        { label: 'create_environment', value: 'create_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment">

Creates an Amazon Web Services Migration Hub Refactor Spaces environment. The caller owns the environment resource, and all Refactor Spaces applications, services, and routes created within the environment. They are referred to as the environment owner. The environment owner has cross-account visibility and control of Refactor Spaces resources that are added to the environment by other accounts that the environment is shared with. When creating an environment with a CreateEnvironment:NetworkFabricType of TRANSIT_GATEWAY, Refactor Spaces provisions a transit gateway to enable services in VPCs to communicate directly across accounts. If CreateEnvironment:NetworkFabricType is NONE, Refactor Spaces does not create a transit gateway and you must use your network infrastructure to route traffic to services with private URL endpoints.

```sql
INSERT INTO aws.migration_hub_refactor_spaces.environments (
ClientToken,
Description,
Name,
NetworkFabricType,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ Description }}',
'{{ Name }}',
'{{ NetworkFabricType }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
created_time,
description,
environment_id,
last_updated_time,
name,
network_fabric_type,
owner_account_id,
state,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environments resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Description
      value: "{{ Description }}"
    - name: Name
      value: "{{ Name }}"
    - name: NetworkFabricType
      value: "{{ NetworkFabricType }}"
      valid_values: ['TRANSIT_GATEWAY', 'NONE']
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of up to 50 unique tags
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment"
    values={[
        { label: 'delete_environment', value: 'delete_environment' }
    ]}
>
<TabItem value="delete_environment">

Deletes an Amazon Web Services Migration Hub Refactor Spaces environment. Before you can delete an environment, you must first delete any applications and services within the environment.

```sql
DELETE FROM aws.migration_hub_refactor_spaces.environments
WHERE environment_identifier = '{{ environment_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
