--- 
title: associations
hide_title: false
hide_table_of_contents: false
keywords:
  - associations
  - devops_agent
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

Creates, updates, deletes, gets or lists an <code>associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_association"
    values={[
        { label: 'get_association', value: 'get_association' },
        { label: 'list_associations', value: 'list_associations' }
    ]}
>
<TabItem value="get_association">

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
    <td><CopyableCode code="agentSpaceId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters) (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the given association. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Union of all supported service configuration types. Each service has its own specific configuration structure.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for a registered service (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Validation status (valid, invalid, pending-confirmation)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_associations">

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
    <td><CopyableCode code="agentSpaceId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters) (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the given association. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Union of all supported service configuration types. Each service has its own specific configuration structure.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for a registered service (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Validation status (valid, invalid, pending-confirmation)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the resource was last updated.</td>
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
    <td><a href="#get_association"><CopyableCode code="get_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves given associations configured for a specific AgentSpace.</td>
</tr>
<tr>
    <td><a href="#list_associations"><CopyableCode code="list_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-filterServiceTypes"><code>filterServiceTypes</code></a></td>
    <td>List all associations for given AgentSpace</td>
</tr>
<tr>
    <td><a href="#update_association"><CopyableCode code="update_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Partially updates the configuration of an existing service association for an AgentSpace. Present fields are fully replaced; absent fields are left unchanged. Returns 200 OK on success.</td>
</tr>
<tr>
    <td><a href="#validate_aws_associations"><CopyableCode code="validate_aws_associations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Validates an aws association and set status and returns a 204 No Content response on success.</td>
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
<tr id="parameter-agent_space_id">
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AgentSpace</td>
</tr>
<tr id="parameter-association_id">
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the given association.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-filterServiceTypes">
    <td><CopyableCode code="filterServiceTypes" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of service types to filter list associations output</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_association"
    values={[
        { label: 'get_association', value: 'get_association' },
        { label: 'list_associations', value: 'list_associations' }
    ]}
>
<TabItem value="get_association">

Retrieves given associations configured for a specific AgentSpace.

```sql
SELECT
agentSpaceId,
associationId,
configuration,
createdAt,
serviceId,
status,
updatedAt
FROM aws.devops_agent.associations
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND association_id = '{{ association_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_associations">

List all associations for given AgentSpace

```sql
SELECT
agentSpaceId,
associationId,
configuration,
createdAt,
serviceId,
status,
updatedAt
FROM aws.devops_agent.associations
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND filterServiceTypes = '{{ filterServiceTypes }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_association"
    values={[
        { label: 'update_association', value: 'update_association' }
    ]}
>
<TabItem value="update_association">

Partially updates the configuration of an existing service association for an AgentSpace. Present fields are fully replaced; absent fields are left unchanged. Returns 200 OK on success.

```sql
UPDATE aws.devops_agent.associations
SET 
configuration = '{{ configuration }}'
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required
AND configuration = '{{ configuration }}' --required
RETURNING
association,
webhook;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_aws_associations"
    values={[
        { label: 'validate_aws_associations', value: 'validate_aws_associations' }
    ]}
>
<TabItem value="validate_aws_associations">

Validates an aws association and set status and returns a 204 No Content response on success.

```sql
EXEC aws.devops_agent.associations.validate_aws_associations 
@agent_space_id='{{ agent_space_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
