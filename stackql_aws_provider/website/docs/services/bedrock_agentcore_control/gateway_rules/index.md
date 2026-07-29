--- 
title: gateway_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - gateway_rules
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>gateway_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateway_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.gateway_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_gateway_rule"
    values={[
        { label: 'get_gateway_rule', value: 'get_gateway_rule' },
        { label: 'list_gateway_rules', value: 'list_gateway_rules' }
    ]}
>
<TabItem value="get_gateway_rule">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The actions to take when the rule conditions are met.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>The conditions that must be met for the rule to apply.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the gateway rule.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway that the rule belongs to. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock-agentcore:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:gateway/(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,48&#125;-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway rule. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the rule. (CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="system" /></td>
    <td><code>object</code></td>
    <td>System-managed metadata for rules created by automated processes.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the rule was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gateway_rules">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The actions to take when the rule conditions are met.</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>The conditions that must be met for the rule to apply.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the gateway rule.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway that the rule belongs to. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock-agentcore:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:gateway/(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,48&#125;-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway rule. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the rule. (CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="system" /></td>
    <td><code>object</code></td>
    <td>System-managed metadata for rules created by automated processes.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the rule was last updated.</td>
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
    <td><a href="#get_gateway_rule"><CopyableCode code="get_gateway_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific gateway rule.</td>
</tr>
<tr>
    <td><a href="#list_gateway_rules"><CopyableCode code="list_gateway_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all rules for a gateway.</td>
</tr>
<tr>
    <td><a href="#create_gateway_rule"><CopyableCode code="create_gateway_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-priority"><code>priority</code></a>, <a href="#parameter-actions"><code>actions</code></a></td>
    <td></td>
    <td>Creates a rule for a gateway. Rules define conditions and actions that control how requests are routed and processed through the gateway, including principal-based access control and path-based routing.</td>
</tr>
<tr>
    <td><a href="#update_gateway_rule"><CopyableCode code="update_gateway_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a gateway rule's priority, conditions, actions, or description.</td>
</tr>
<tr>
    <td><a href="#delete_gateway_rule"><CopyableCode code="delete_gateway_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a gateway rule.</td>
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
<tr id="parameter-gateway_identifier">
    <td><CopyableCode code="gateway_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the gateway containing the rule.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the rule to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_gateway_rule"
    values={[
        { label: 'get_gateway_rule', value: 'get_gateway_rule' },
        { label: 'list_gateway_rules', value: 'list_gateway_rules' }
    ]}
>
<TabItem value="get_gateway_rule">

Retrieves detailed information about a specific gateway rule.

```sql
SELECT
actions,
conditions,
created_at,
description,
gateway_arn,
priority,
rule_id,
status,
system,
updated_at
FROM aws.bedrock_agentcore_control.gateway_rules
WHERE gateway_identifier = '{{ gateway_identifier }}' -- required
AND rule_id = '{{ rule_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_gateway_rules">

Lists all rules for a gateway.

```sql
SELECT
actions,
conditions,
created_at,
description,
gateway_arn,
priority,
rule_id,
status,
system,
updated_at
FROM aws.bedrock_agentcore_control.gateway_rules
WHERE gateway_identifier = '{{ gateway_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_gateway_rule"
    values={[
        { label: 'create_gateway_rule', value: 'create_gateway_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gateway_rule">

Creates a rule for a gateway. Rules define conditions and actions that control how requests are routed and processed through the gateway, including principal-based access control and path-based routing.

```sql
INSERT INTO aws.bedrock_agentcore_control.gateway_rules (
clientToken,
priority,
conditions,
actions,
description,
gateway_identifier,
region
)
SELECT 
'{{ clientToken }}',
{{ priority }} /* required */,
'{{ conditions }}',
'{{ actions }}' /* required */,
'{{ description }}',
'{{ gateway_identifier }}',
'{{ region }}'
RETURNING
actions,
conditions,
created_at,
description,
gateway_arn,
priority,
rule_id,
status,
system
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gateway_rules
  props:
    - name: gateway_identifier
      value: "{{ gateway_identifier }}"
      description: Required parameter for the gateway_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the gateway_rules resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: priority
      value: {{ priority }}
    - name: conditions
      value:
        - matchPrincipals:
            anyOf_:
              - iamPrincipal:
                  arn: "{{ arn }}"
                  operator: "{{ operator }}"
          matchPaths:
            anyOf_:
              - "{{ anyOf_ }}"
    - name: actions
      value:
        - configurationBundle:
            staticOverride:
              bundleArn: "{{ bundleArn }}"
              bundleVersion: "{{ bundleVersion }}"
            weightedOverride:
              trafficSplit:
                - name: "{{ name }}"
                  weight: {{ weight }}
                  configurationBundle:
                    bundleArn: "{{ bundleArn }}"
                    bundleVersion: "{{ bundleVersion }}"
                  description: "{{ description }}"
                  metadata: "{{ metadata }}"
          routeToTarget:
            staticRoute:
              targetName: "{{ targetName }}"
            weightedRoute:
              trafficSplit:
                - name: "{{ name }}"
                  weight: {{ weight }}
                  targetName: "{{ targetName }}"
                  description: "{{ description }}"
                  metadata: "{{ metadata }}"
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_gateway_rule"
    values={[
        { label: 'update_gateway_rule', value: 'update_gateway_rule' }
    ]}
>
<TabItem value="update_gateway_rule">

Updates a gateway rule's priority, conditions, actions, or description.

```sql
UPDATE aws.bedrock_agentcore_control.gateway_rules
SET 
priority = {{ priority }},
conditions = '{{ conditions }}',
actions = '{{ actions }}',
description = '{{ description }}'
WHERE 
gateway_identifier = '{{ gateway_identifier }}' --required
AND rule_id = '{{ rule_id }}' --required
AND region = '{{ region }}' --required
RETURNING
actions,
conditions,
created_at,
description,
gateway_arn,
priority,
rule_id,
status,
system,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gateway_rule"
    values={[
        { label: 'delete_gateway_rule', value: 'delete_gateway_rule' }
    ]}
>
<TabItem value="delete_gateway_rule">

Deletes a gateway rule.

```sql
DELETE FROM aws.bedrock_agentcore_control.gateway_rules
WHERE gateway_identifier = '{{ gateway_identifier }}' --required
AND rule_id = '{{ rule_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
