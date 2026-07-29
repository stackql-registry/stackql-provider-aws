--- 
title: link_routing_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - link_routing_rules
  - rtbfabric
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

Creates, updates, deletes, gets or lists a <code>link_routing_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="link_routing_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rtbfabric.link_routing_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_link_routing_rule"
    values={[
        { label: 'get_link_routing_rule', value: 'get_link_routing_rule' },
        { label: 'list_link_routing_rules', value: 'list_link_routing_rules' }
    ]}
>
<TabItem value="get_link_routing_rule">

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
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Conditions bag for a routing rule. All non-null fields must match (AND logic). At least one field must be set (enforced by CP).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the routing rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway. (pattern: &lt;code&gt;rtb-gw-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="link_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the link. (pattern: &lt;code&gt;link-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>WAF-style evaluation priority. Lower number = evaluated first (priority 1 before 10). Gaps are allowed (1, 10, 20 is valid). Must be between 1 and 1000 inclusive. Uniqueness per link among non-deleted rules is enforced at the API layer (HTTP 409 on conflict).</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>Identifier for a routing rule (pattern: &lt;code&gt;rule-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the routing rule. (CREATION_IN_PROGRESS, ACTIVE, UPDATE_IN_PROGRESS, DELETION_IN_PROGRESS, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of the key-value pairs for the tag or tags assigned to the specified resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the routing rule was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_link_routing_rules">

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
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Conditions bag for a routing rule. All non-null fields must match (AND logic). At least one field must be set (enforced by CP).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the routing rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>WAF-style evaluation priority. Lower number = evaluated first (priority 1 before 10). Gaps are allowed (1, 10, 20 is valid). Must be between 1 and 1000 inclusive. Uniqueness per link among non-deleted rules is enforced at the API layer (HTTP 409 on conflict).</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>Identifier for a routing rule (pattern: &lt;code&gt;rule-&#91;a-z0-9-&#93;&#123;1,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the routing rule. (CREATION_IN_PROGRESS, ACTIVE, UPDATE_IN_PROGRESS, DELETION_IN_PROGRESS, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the routing rule was last updated.</td>
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
    <td><a href="#get_link_routing_rule"><CopyableCode code="get_link_routing_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a routing rule for a link.</td>
</tr>
<tr>
    <td><a href="#list_link_routing_rules"><CopyableCode code="list_link_routing_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the routing rules for a link.</td>
</tr>
<tr>
    <td><a href="#create_link_routing_rule"><CopyableCode code="create_link_routing_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-priority"><code>priority</code></a>, <a href="#parameter-conditions"><code>conditions</code></a></td>
    <td></td>
    <td>Creates a routing rule for a link. Routing rules use priority-based evaluation where lower priority numbers are evaluated first. Each rule specifies conditions that must all match for the rule to apply.</td>
</tr>
<tr>
    <td><a href="#update_link_routing_rule"><CopyableCode code="update_link_routing_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-priority"><code>priority</code></a>, <a href="#parameter-conditions"><code>conditions</code></a></td>
    <td></td>
    <td>Updates a routing rule for a link.</td>
</tr>
<tr>
    <td><a href="#delete_link_routing_rule"><CopyableCode code="delete_link_routing_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a routing rule from a link.</td>
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
<tr id="parameter-gateway_id">
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway.</td>
</tr>
<tr id="parameter-link_id">
    <td><CopyableCode code="link_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the link.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the routing rule.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_link_routing_rule"
    values={[
        { label: 'get_link_routing_rule', value: 'get_link_routing_rule' },
        { label: 'list_link_routing_rules', value: 'list_link_routing_rules' }
    ]}
>
<TabItem value="get_link_routing_rule">

Retrieves the details of a routing rule for a link.

```sql
SELECT
conditions,
created_at,
gateway_id,
link_id,
priority,
rule_id,
status,
tags,
updated_at
FROM aws.rtbfabric.link_routing_rules
WHERE gateway_id = '{{ gateway_id }}' -- required
AND link_id = '{{ link_id }}' -- required
AND rule_id = '{{ rule_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_link_routing_rules">

Lists the routing rules for a link.

```sql
SELECT
conditions,
created_at,
priority,
rule_id,
status,
updated_at
FROM aws.rtbfabric.link_routing_rules
WHERE gateway_id = '{{ gateway_id }}' -- required
AND link_id = '{{ link_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_link_routing_rule"
    values={[
        { label: 'create_link_routing_rule', value: 'create_link_routing_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_link_routing_rule">

Creates a routing rule for a link. Routing rules use priority-based evaluation where lower priority numbers are evaluated first. Each rule specifies conditions that must all match for the rule to apply.

```sql
INSERT INTO aws.rtbfabric.link_routing_rules (
clientToken,
priority,
conditions,
tags,
gateway_id,
link_id,
region
)
SELECT 
'{{ clientToken }}' /* required */,
{{ priority }} /* required */,
'{{ conditions }}' /* required */,
'{{ tags }}',
'{{ gateway_id }}',
'{{ link_id }}',
'{{ region }}'
RETURNING
created_at,
rule_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: link_routing_rules
  props:
    - name: gateway_id
      value: "{{ gateway_id }}"
      description: Required parameter for the link_routing_rules resource.
    - name: link_id
      value: "{{ link_id }}"
      description: Required parameter for the link_routing_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the link_routing_rules resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: priority
      value: {{ priority }}
      description: |
        WAF-style evaluation priority. Lower number = evaluated first (priority 1 before 10). Gaps are allowed (1, 10, 20 is valid). Must be between 1 and 1000 inclusive. Uniqueness per link among non-deleted rules is enforced at the API layer (HTTP 409 on conflict).
    - name: conditions
      description: |
        Conditions bag for a routing rule. All non-null fields must match (AND logic). At least one field must be set (enforced by CP).
      value:
        hostHeader: "{{ hostHeader }}"
        hostHeaderWildcard: "{{ hostHeaderWildcard }}"
        pathPrefix: "{{ pathPrefix }}"
        pathExact: "{{ pathExact }}"
        queryStringEquals:
          key: "{{ key }}"
          value: "{{ value }}"
        queryStringExists: "{{ queryStringExists }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_link_routing_rule"
    values={[
        { label: 'update_link_routing_rule', value: 'update_link_routing_rule' }
    ]}
>
<TabItem value="update_link_routing_rule">

Updates a routing rule for a link.

```sql
UPDATE aws.rtbfabric.link_routing_rules
SET 
priority = {{ priority }},
conditions = '{{ conditions }}'
WHERE 
gateway_id = '{{ gateway_id }}' --required
AND link_id = '{{ link_id }}' --required
AND rule_id = '{{ rule_id }}' --required
AND region = '{{ region }}' --required
AND priority = '{{ priority }}' --required
AND conditions = '{{ conditions }}' --required
RETURNING
rule_id,
status,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_link_routing_rule"
    values={[
        { label: 'delete_link_routing_rule', value: 'delete_link_routing_rule' }
    ]}
>
<TabItem value="delete_link_routing_rule">

Deletes a routing rule from a link.

```sql
DELETE FROM aws.rtbfabric.link_routing_rules
WHERE gateway_id = '{{ gateway_id }}' --required
AND link_id = '{{ link_id }}' --required
AND rule_id = '{{ rule_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
