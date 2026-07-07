--- 
title: resources_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - resources_summaries
  - proton
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

Creates, updates, deletes, gets or lists a <code>resources_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.resources_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resources_summary"
    values={[
        { label: 'get_resources_summary', value: 'get_resources_summary' }
    ]}
>
<TabItem value="get_resources_summary">

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
    <td><CopyableCode code="components" /></td>
    <td><code>object</code></td>
    <td>The total number of components in the Amazon Web Services account. The semantics of the components field are different from the semantics of results for other infrastructure-provisioning resources. That's because at this time components don't have associated templates, therefore they don't have the concept of staleness. The components object will only contain total and failed members.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentTemplates" /></td>
    <td><code>object</code></td>
    <td>The total number of environment templates in the Amazon Web Services account. The environmentTemplates object will only contain total members.</td>
</tr>
<tr>
    <td><CopyableCode code="environments" /></td>
    <td><code>object</code></td>
    <td>The staleness counts for Proton environments in the Amazon Web Services account. The environments object will only contain total members.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelines" /></td>
    <td><code>object</code></td>
    <td>The staleness counts for Proton pipelines in the Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceInstances" /></td>
    <td><code>object</code></td>
    <td>The staleness counts for Proton service instances in the Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceTemplates" /></td>
    <td><code>object</code></td>
    <td>The total number of service templates in the Amazon Web Services account. The serviceTemplates object will only contain total members.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>object</code></td>
    <td>The staleness counts for Proton services in the Amazon Web Services account.</td>
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
    <td><a href="#get_resources_summary"><CopyableCode code="get_resources_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get counts of Proton resources. For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current. The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the components, environments, and serviceTemplates field descriptions. For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account. For more information, see Proton dashboard in the Proton User Guide.</td>
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
    defaultValue="get_resources_summary"
    values={[
        { label: 'get_resources_summary', value: 'get_resources_summary' }
    ]}
>
<TabItem value="get_resources_summary">

Get counts of Proton resources. For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current. The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components, environments, and service templates return less information - see the components, environments, and serviceTemplates field descriptions. For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account. For more information, see Proton dashboard in the Proton User Guide.

```sql
SELECT
components,
environmentTemplates,
environments,
pipelines,
serviceInstances,
serviceTemplates,
services
FROM aws.proton.resources_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
