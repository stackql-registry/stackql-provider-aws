--- 
title: agent_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_recommendations
  - wellarchitected
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

Creates, updates, deletes, gets or lists an <code>agent_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.agent_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_recommendation"
    values={[
        { label: 'get_agent_recommendation', value: 'get_agent_recommendation' },
        { label: 'list_agent_recommendations', value: 'list_agent_recommendations' }
    ]}
>
<TabItem value="get_agent_recommendation">

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
    <td><CopyableCode code="applications" /></td>
    <td><code>array</code></td>
    <td>The applications that the recommendation targets.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_services" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services services that the recommendation applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="business_units" /></td>
    <td><code>array</code></td>
    <td>The business units that own the affected resources.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created this recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="cross_pillar_benefits" /></td>
    <td><code>array</code></td>
    <td>Cross-pillar benefits of acting on the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="effort" /></td>
    <td><code>string</code></td>
    <td>The effort required to implement the recommendation. (LARGE, MEDIUM, SMALL)</td>
</tr>
<tr>
    <td><CopyableCode code="goals" /></td>
    <td><code>array</code></td>
    <td>Goals that this recommendation targets.</td>
</tr>
<tr>
    <td><CopyableCode code="highlights" /></td>
    <td><code>array</code></td>
    <td>Highlights describing what was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="impact" /></td>
    <td><code>string</code></td>
    <td>The severity of the recommendation's impact. (HIGH, MEDIUM, LOW)</td>
</tr>
<tr>
    <td><CopyableCode code="impact_details" /></td>
    <td><code>array</code></td>
    <td>Detailed impact information for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="insights" /></td>
    <td><code>array</code></td>
    <td>A list of insights about the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_resources" /></td>
    <td><code>integer</code></td>
    <td>The number of Amazon Web Services resources this recommendation affects.</td>
</tr>
<tr>
    <td><CopyableCode code="pillar" /></td>
    <td><code>string</code></td>
    <td>The Well-Architected Tool Framework pillar that the recommendation addresses. (COST_OPTIMIZATION, SECURITY, RESILIENCE, PERFORMANCE, OPERATIONAL_EXCELLENCE)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>The priority of the recommendation. (HIGH, MEDIUM, LOW)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the associated profile. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-profile/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recommendation. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-recommendation/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation_summary" /></td>
    <td><code>object</code></td>
    <td>A high-level summary of the recommended remediation.</td>
</tr>
<tr>
    <td><CopyableCode code="remediations" /></td>
    <td><code>array</code></td>
    <td>A list of remediations for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="roi" /></td>
    <td><code>object</code></td>
    <td>The return on investment estimate for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>Sources that generated this recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the recommendation. (OPEN, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the recommendation. (ACTIVE, SUPPRESSED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A set of key-value pairs associated with the recommendation, used for cost allocation and access control.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="trade_offs" /></td>
    <td><code>array</code></td>
    <td>Trade-offs of acting on the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the recommendation. (RESOURCE, ARCHITECTURE, APPLICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="update_reason" /></td>
    <td><code>string</code></td>
    <td>The free-text reason associated with the recommendation's most recent status update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_recommendations">

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
    <td><CopyableCode code="applications" /></td>
    <td><code>array</code></td>
    <td>The applications that the recommendation targets.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_services" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services services that the recommendation applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="business_units" /></td>
    <td><code>array</code></td>
    <td>The business units that own the affected resources.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created this recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="effort" /></td>
    <td><code>string</code></td>
    <td>The effort required to implement the recommendation. (LARGE, MEDIUM, SMALL)</td>
</tr>
<tr>
    <td><CopyableCode code="impact" /></td>
    <td><code>string</code></td>
    <td>The severity of the recommendation's impact. (HIGH, MEDIUM, LOW)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_resources" /></td>
    <td><code>integer</code></td>
    <td>The number of Amazon Web Services resources this recommendation affects.</td>
</tr>
<tr>
    <td><CopyableCode code="pillar" /></td>
    <td><code>string</code></td>
    <td>The Well-Architected Tool Framework pillar that the recommendation addresses. (COST_OPTIMIZATION, SECURITY, RESILIENCE, PERFORMANCE, OPERATIONAL_EXCELLENCE)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>The priority of the recommendation. (HIGH, MEDIUM, LOW)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the associated profile. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-profile/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recommendation. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-recommendation/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roi" /></td>
    <td><code>object</code></td>
    <td>The return on investment estimate for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the recommendation. (OPEN, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the recommendation. (ACTIVE, SUPPRESSED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the recommendation. (RESOURCE, ARCHITECTURE, APPLICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="update_reason" /></td>
    <td><code>string</code></td>
    <td>The free-text reason associated with the recommendation's most recent status update.</td>
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
    <td><a href="#get_agent_recommendation"><CopyableCode code="get_agent_recommendation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-recommendation_arn"><code>recommendation_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-remediationType"><code>remediationType</code></a></td>
    <td>Retrieves detailed information about a specific optimization recommendation, including its impact analysis, content, and implementation guidance.</td>
</tr>
<tr>
    <td><a href="#list_agent_recommendations"><CopyableCode code="list_agent_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-pillar"><code>pillar</code></a></td>
    <td>Lists active optimization recommendations for a specified profile with optional filtering by state.</td>
</tr>
<tr>
    <td><a href="#update_agent_recommendation_status"><CopyableCode code="update_agent_recommendation_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-recommendation_arn"><code>recommendation_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the status of a recommendation to track its progress through the implementation lifecycle.</td>
</tr>
<tr>
    <td><a href="#put_agent_recommendation_feedback"><CopyableCode code="put_agent_recommendation_feedback" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-recommendation_arn"><code>recommendation_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Submits user feedback on a recommendation to help improve future optimization suggestions and track implementation outcomes.</td>
</tr>
<tr>
    <td><a href="#start_agent_recommendation_generation"><CopyableCode code="start_agent_recommendation_generation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-types"><code>types</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Initiates a new recommendation generation process for the specified optimization profile. This asynchronous operation analyzes your Amazon Web Services resources and generates optimization recommendations based on the configured pillars and scope. Use GetAgentRecommendationGeneration to check status.</td>
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
<tr id="parameter-profile_arn">
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the optimization profile to use for generating recommendations.</td>
</tr>
<tr id="parameter-recommendation_arn">
    <td><CopyableCode code="recommendation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recommendation to provide feedback for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of recommendations to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to continue retrieving results.</td>
</tr>
<tr id="parameter-pillar">
    <td><CopyableCode code="pillar" /></td>
    <td><code>string</code></td>
    <td>Optional filter to return only recommendations for the specified pillar.</td>
</tr>
<tr id="parameter-remediationType">
    <td><CopyableCode code="remediationType" /></td>
    <td><code>string</code></td>
    <td>Optional filter on remediation type.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Optional filter to return only recommendations with the specified state (OPEN or CLOSED).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_recommendation"
    values={[
        { label: 'get_agent_recommendation', value: 'get_agent_recommendation' },
        { label: 'list_agent_recommendations', value: 'list_agent_recommendations' }
    ]}
>
<TabItem value="get_agent_recommendation">

Retrieves detailed information about a specific optimization recommendation, including its impact analysis, content, and implementation guidance.

```sql
SELECT
applications,
aws_services,
business_units,
created_at,
created_by,
cross_pillar_benefits,
description,
effort,
goals,
highlights,
impact,
impact_details,
insights,
last_modified_at,
last_modified_by,
number_of_resources,
pillar,
priority,
profile_arn,
recommendation_arn,
remediation_summary,
remediations,
roi,
sources,
state,
status,
tags,
title_,
trade_offs,
type_,
update_reason
FROM aws.wellarchitected.agent_recommendations
WHERE recommendation_arn = '{{ recommendation_arn }}' -- required
AND region = '{{ region }}' -- required
AND remediationType = '{{ remediationType }}'
;
```
</TabItem>
<TabItem value="list_agent_recommendations">

Lists active optimization recommendations for a specified profile with optional filtering by state.

```sql
SELECT
applications,
aws_services,
business_units,
created_at,
created_by,
description,
effort,
impact,
last_modified_at,
last_modified_by,
number_of_resources,
pillar,
priority,
profile_arn,
recommendation_arn,
roi,
state,
status,
title_,
type_,
update_reason
FROM aws.wellarchitected.agent_recommendations
WHERE profile_arn = '{{ profile_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND state = '{{ state }}'
AND pillar = '{{ pillar }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_recommendation_status"
    values={[
        { label: 'update_agent_recommendation_status', value: 'update_agent_recommendation_status' }
    ]}
>
<TabItem value="update_agent_recommendation_status">

Updates the status of a recommendation to track its progress through the implementation lifecycle.

```sql
UPDATE aws.wellarchitected.agent_recommendations
SET 
status = '{{ status }}',
updateReason = '{{ updateReason }}'
WHERE 
recommendation_arn = '{{ recommendation_arn }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_agent_recommendation_feedback"
    values={[
        { label: 'put_agent_recommendation_feedback', value: 'put_agent_recommendation_feedback' }
    ]}
>
<TabItem value="put_agent_recommendation_feedback">

Submits user feedback on a recommendation to help improve future optimization suggestions and track implementation outcomes.

```sql
REPLACE aws.wellarchitected.agent_recommendations
SET 
type = '{{ type }}',
feedbackCategory = '{{ feedbackCategory }}',
comments = '{{ comments }}'
WHERE 
recommendation_arn = '{{ recommendation_arn }}' --required
AND region = '{{ region }}' --required
AND type = '{{ type }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_agent_recommendation_generation"
    values={[
        { label: 'start_agent_recommendation_generation', value: 'start_agent_recommendation_generation' }
    ]}
>
<TabItem value="start_agent_recommendation_generation">

Initiates a new recommendation generation process for the specified optimization profile. This asynchronous operation analyzes your Amazon Web Services resources and generates optimization recommendations based on the configured pillars and scope. Use GetAgentRecommendationGeneration to check status.

```sql
EXEC aws.wellarchitected.agent_recommendations.start_agent_recommendation_generation 
@profile_arn='{{ profile_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"types": "{{ types }}", 
"name": "{{ name }}", 
"additionalContext": "{{ additionalContext }}", 
"scope": "{{ scope }}"
}'
;
```
</TabItem>
</Tabs>
