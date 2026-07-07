--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - vpc_lattice
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rule"
    values={[
        { label: 'get_rule', value: 'get_rule' },
        { label: 'list_rules', value: 'list_rules' }
    ]}
>
<TabItem value="get_rule">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the listener. (pattern: &lt;code&gt;rule-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the listener. (pattern: &lt;code&gt;(?!rule-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>Describes the action for a rule.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:service/svc-&#91;0-9a-z&#93;&#123;17&#125;/listener/listener-&#91;0-9a-z&#93;&#123;17&#125;/rule/rule-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the listener rule was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="isDefault" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the default rule.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the listener rule was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="match" /></td>
    <td><code>object</code></td>
    <td>Describes a rule match.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority level for the specified rule.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rules">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the rule. (pattern: &lt;code&gt;rule-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule. (pattern: &lt;code&gt;(?!rule-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the rule. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:service/svc-&#91;0-9a-z&#93;&#123;17&#125;/listener/listener-&#91;0-9a-z&#93;&#123;17&#125;/rule/rule-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the listener rule was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="isDefault" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the default listener rule.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the listener rule was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the rule.</td>
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
    <td><a href="#get_rule"><CopyableCode code="get_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-listener_identifier"><code>listener_identifier</code></a>, <a href="#parameter-rule_identifier"><code>rule_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified listener rules. You can also retrieve information about the default listener rule. For more information, see Listener rules in the Amazon VPC Lattice User Guide.</td>
</tr>
<tr>
    <td><a href="#list_rules"><CopyableCode code="list_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-listener_identifier"><code>listener_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the rules for the specified listener.</td>
</tr>
<tr>
    <td><a href="#create_rule"><CopyableCode code="create_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-listener_identifier"><code>listener_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-match"><code>match</code></a>, <a href="#parameter-priority"><code>priority</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see Listener rules in the Amazon VPC Lattice User Guide.</td>
</tr>
<tr>
    <td><a href="#update_rule"><CopyableCode code="update_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-listener_identifier"><code>listener_identifier</code></a>, <a href="#parameter-rule_identifier"><code>rule_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a specified rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use UpdateListener.</td>
</tr>
<tr>
    <td><a href="#delete_rule"><CopyableCode code="delete_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-listener_identifier"><code>listener_identifier</code></a>, <a href="#parameter-rule_identifier"><code>rule_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule. For more information, see Listener rules in the Amazon VPC Lattice User Guide.</td>
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
<tr id="parameter-listener_identifier">
    <td><CopyableCode code="listener_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the listener.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-rule_identifier">
    <td><CopyableCode code="rule_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the rule.</td>
</tr>
<tr id="parameter-service_identifier">
    <td><CopyableCode code="service_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the service.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_rule"
    values={[
        { label: 'get_rule', value: 'get_rule' },
        { label: 'list_rules', value: 'list_rules' }
    ]}
>
<TabItem value="get_rule">

Retrieves information about the specified listener rules. You can also retrieve information about the default listener rule. For more information, see Listener rules in the Amazon VPC Lattice User Guide.

```sql
SELECT
id,
name,
action,
arn,
createdAt,
isDefault,
lastUpdatedAt,
match,
priority
FROM aws.vpc_lattice.rules
WHERE service_identifier = '{{ service_identifier }}' -- required
AND listener_identifier = '{{ listener_identifier }}' -- required
AND rule_identifier = '{{ rule_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rules">

Lists the rules for the specified listener.

```sql
SELECT
id,
name,
arn,
createdAt,
isDefault,
lastUpdatedAt,
priority
FROM aws.vpc_lattice.rules
WHERE service_identifier = '{{ service_identifier }}' -- required
AND listener_identifier = '{{ listener_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule"
    values={[
        { label: 'create_rule', value: 'create_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule">

Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see Listener rules in the Amazon VPC Lattice User Guide.

```sql
INSERT INTO aws.vpc_lattice.rules (
name,
match,
priority,
action,
clientToken,
tags,
service_identifier,
listener_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ match }}' /* required */,
{{ priority }} /* required */,
'{{ action }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ service_identifier }}',
'{{ listener_identifier }}',
'{{ region }}'
RETURNING
id,
name,
action,
arn,
match,
priority
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: service_identifier
      value: "{{ service_identifier }}"
      description: Required parameter for the rules resource.
    - name: listener_identifier
      value: "{{ listener_identifier }}"
      description: Required parameter for the rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rules resource.
    - name: name
      value: "{{ name }}"
    - name: match
      description: |
        Describes a rule match.
      value:
        httpMatch:
          method: "{{ method }}"
          pathMatch:
            match:
              exact: "{{ exact }}"
              prefix: "{{ prefix }}"
            caseSensitive: {{ caseSensitive }}
          headerMatches:
            - name: "{{ name }}"
              match:
                exact: "{{ exact }}"
                prefix: "{{ prefix }}"
                contains: "{{ contains }}"
              caseSensitive: {{ caseSensitive }}
    - name: priority
      value: {{ priority }}
    - name: action
      description: |
        Describes the action for a rule.
      value:
        forward:
          targetGroups:
            - targetGroupIdentifier: "{{ targetGroupIdentifier }}"
              weight: {{ weight }}
        fixedResponse:
          statusCode: {{ statusCode }}
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rule"
    values={[
        { label: 'update_rule', value: 'update_rule' }
    ]}
>
<TabItem value="update_rule">

Updates a specified rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use UpdateListener.

```sql
UPDATE aws.vpc_lattice.rules
SET 
match = '{{ match }}',
priority = {{ priority }},
action = '{{ action }}'
WHERE 
service_identifier = '{{ service_identifier }}' --required
AND listener_identifier = '{{ listener_identifier }}' --required
AND rule_identifier = '{{ rule_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
action,
arn,
isDefault,
match,
priority;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule"
    values={[
        { label: 'delete_rule', value: 'delete_rule' }
    ]}
>
<TabItem value="delete_rule">

Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule. For more information, see Listener rules in the Amazon VPC Lattice User Guide.

```sql
DELETE FROM aws.vpc_lattice.rules
WHERE service_identifier = '{{ service_identifier }}' --required
AND listener_identifier = '{{ listener_identifier }}' --required
AND rule_identifier = '{{ rule_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
