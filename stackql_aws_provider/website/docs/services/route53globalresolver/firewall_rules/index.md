--- 
title: firewall_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rules
  - route53globalresolver
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

Creates, updates, deletes, gets or lists a <code>firewall_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53globalresolver.firewall_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_firewall_rules"
    values={[
        { label: 'list_firewall_rules', value: 'list_firewall_rules' },
        { label: 'get_firewall_rule', value: 'get_firewall_rule' }
    ]}
>
<TabItem value="list_firewall_rules">

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
    <td>The unique identifier of the firewall rule. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the firewall rule. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action configured for the firewall rule. (ALLOW, ALERT, BLOCK)</td>
</tr>
<tr>
    <td><CopyableCode code="blockOverrideDnsType" /></td>
    <td><code>string</code></td>
    <td>The DNS record type configured for the firewall rule's custom response. (CNAME)</td>
</tr>
<tr>
    <td><CopyableCode code="blockOverrideDomain" /></td>
    <td><code>string</code></td>
    <td>The custom domain name configured for the firewall rule's BLOCK response. (pattern: &lt;code&gt;\*?&#91;a-zA-Z0-9!"#$%&'()*+,./:;&lt;=&gt;?@\&#91;\\\&#93;^_`&#123;|&#125;~-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="blockOverrideTtl" /></td>
    <td><code>integer</code></td>
    <td>The TTL value configured for the firewall rule's custom response.</td>
</tr>
<tr>
    <td><CopyableCode code="blockResponse" /></td>
    <td><code>string</code></td>
    <td>The type of block response configured for the firewall rule. (NODATA, NXDOMAIN, OVERRIDE)</td>
</tr>
<tr>
    <td><CopyableCode code="confidenceThreshold" /></td>
    <td><code>string</code></td>
    <td>The confidence threshold configured for the firewall rule's advanced threat detection. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the firewall rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the firewall rule.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsAdvancedProtection" /></td>
    <td><code>string</code></td>
    <td>Whether advanced DNS threat protection is enabled for the firewall rule. (DGA, DNS_TUNNELING, DICTIONARY_DGA)</td>
</tr>
<tr>
    <td><CopyableCode code="dnsViewId" /></td>
    <td><code>string</code></td>
    <td>The ID of the DNS view associated with the firewall rule. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="firewallDomainListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the firewall domain list associated with the firewall rule. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int64)</code></td>
    <td>The priority of the firewall rule.</td>
</tr>
<tr>
    <td><CopyableCode code="queryType" /></td>
    <td><code>string</code></td>
    <td>The DNS query type that the firewall rule matches.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the firewall rule. (CREATING, OPERATIONAL, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the firewall rule was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_firewall_rule">

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
    <td>ID of the DNS Firewall rule. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the DNS Firewall rule. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule. (ALLOW, ALERT, BLOCK)</td>
</tr>
<tr>
    <td><CopyableCode code="blockOverrideDnsType" /></td>
    <td><code>string</code></td>
    <td>The DNS record's type. This determines the format of the record value that you provided in BlockOverrideDomain. Used for the rule action BLOCK with a BlockResponse setting of OVERRIDE. (CNAME)</td>
</tr>
<tr>
    <td><CopyableCode code="blockOverrideDomain" /></td>
    <td><code>string</code></td>
    <td>The custom DNS record to send back in response to the query. Used for the rule action BLOCK with a BlockResponse setting of OVERRIDE. (pattern: &lt;code&gt;\*?&#91;a-zA-Z0-9!"#$%&'()*+,./:;&lt;=&gt;?@\&#91;\\\&#93;^_`&#123;|&#125;~-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="blockOverrideTtl" /></td>
    <td><code>integer</code></td>
    <td>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action BLOCK with a BlockResponse setting of OVERRIDE.</td>
</tr>
<tr>
    <td><CopyableCode code="blockResponse" /></td>
    <td><code>string</code></td>
    <td>The way that you want DNS Firewall to block the request. Used for the rule action setting BLOCK. (NODATA, NXDOMAIN, OVERRIDE)</td>
</tr>
<tr>
    <td><CopyableCode code="confidenceThreshold" /></td>
    <td><code>string</code></td>
    <td>The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date the DNS Firewall rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the DNS Firewall rule.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsAdvancedProtection" /></td>
    <td><code>string</code></td>
    <td>The type of the DNS Firewall Advanced rule. Valid values are DGA, DNS_TUNNELING, and DICTIONARY_DGA. (DGA, DNS_TUNNELING, DICTIONARY_DGA)</td>
</tr>
<tr>
    <td><CopyableCode code="dnsViewId" /></td>
    <td><code>string</code></td>
    <td>The DNS view ID the DNS Firewall is associated with. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="firewallDomainListId" /></td>
    <td><code>string</code></td>
    <td>The ID of a DNS Firewall domain list. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int64)</code></td>
    <td>The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</td>
</tr>
<tr>
    <td><CopyableCode code="queryType" /></td>
    <td><code>string</code></td>
    <td>The DNS query type you want the rule to evaluate.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The operational status of the DNS Firewall rule. (CREATING, OPERATIONAL, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the DNS Firewall rule was updated.</td>
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
    <td><a href="#list_firewall_rules"><CopyableCode code="list_firewall_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dnsview_id"><code>dnsview_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a>, <a href="#parameter-filters"><code>filters</code></a></td>
    <td>Lists all DNS firewall rules for a DNS view with pagination support. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#get_firewall_rule"><CopyableCode code="get_firewall_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-firewall_rule_id"><code>firewall_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a DNS firewall rule. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#create_firewall_rule"><CopyableCode code="create_firewall_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-dnsViewId"><code>dnsViewId</code></a></td>
    <td></td>
    <td>Creates a DNS firewall rule. Firewall rules define actions (ALLOW, BLOCK, or ALERT) to take on DNS queries that match specified domain lists, managed domain lists, or advanced threat protections. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#update_firewall_rule"><CopyableCode code="update_firewall_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-firewall_rule_id"><code>firewall_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Updates the configuration of a DNS firewall rule. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#delete_firewall_rule"><CopyableCode code="delete_firewall_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-firewall_rule_id"><code>firewall_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a DNS firewall rule. This operation cannot be undone. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
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
<tr id="parameter-dnsview_id">
    <td><CopyableCode code="dnsview_id" /></td>
    <td><code>string</code></td>
    <td>ID of the DNS view.</td>
</tr>
<tr id="parameter-firewall_rule_id">
    <td><CopyableCode code="firewall_rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the firewall rule to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-filters">
    <td><CopyableCode code="filters" /></td>
    <td><code>object</code></td>
    <td>Values to filter the results.</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to retrieve in a single call.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A pagination token used for large sets of results that can't be returned in a single response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_firewall_rules"
    values={[
        { label: 'list_firewall_rules', value: 'list_firewall_rules' },
        { label: 'get_firewall_rule', value: 'get_firewall_rule' }
    ]}
>
<TabItem value="list_firewall_rules">

Lists all DNS firewall rules for a DNS view with pagination support. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
action,
blockOverrideDnsType,
blockOverrideDomain,
blockOverrideTtl,
blockResponse,
confidenceThreshold,
createdAt,
description,
dnsAdvancedProtection,
dnsViewId,
firewallDomainListId,
priority,
queryType,
status,
updatedAt
FROM aws.route53globalresolver.firewall_rules
WHERE dnsview_id = '{{ dnsview_id }}' -- required
AND region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
AND filters = '{{ filters }}'
;
```
</TabItem>
<TabItem value="get_firewall_rule">

Retrieves information about a DNS firewall rule. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
action,
blockOverrideDnsType,
blockOverrideDomain,
blockOverrideTtl,
blockResponse,
confidenceThreshold,
createdAt,
description,
dnsAdvancedProtection,
dnsViewId,
firewallDomainListId,
priority,
queryType,
status,
updatedAt
FROM aws.route53globalresolver.firewall_rules
WHERE firewall_rule_id = '{{ firewall_rule_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_firewall_rule"
    values={[
        { label: 'create_firewall_rule', value: 'create_firewall_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_firewall_rule">

Creates a DNS firewall rule. Firewall rules define actions (ALLOW, BLOCK, or ALERT) to take on DNS queries that match specified domain lists, managed domain lists, or advanced threat protections. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
INSERT INTO aws.route53globalresolver.firewall_rules (
action,
blockOverrideDnsType,
blockOverrideDomain,
blockOverrideTtl,
blockResponse,
clientToken,
confidenceThreshold,
description,
dnsAdvancedProtection,
firewallDomainListId,
name,
priority,
dnsViewId,
qType,
region
)
SELECT 
'{{ action }}' /* required */,
'{{ blockOverrideDnsType }}',
'{{ blockOverrideDomain }}',
{{ blockOverrideTtl }},
'{{ blockResponse }}',
'{{ clientToken }}',
'{{ confidenceThreshold }}',
'{{ description }}',
'{{ dnsAdvancedProtection }}',
'{{ firewallDomainListId }}',
'{{ name }}' /* required */,
{{ priority }},
'{{ dnsViewId }}' /* required */,
'{{ qType }}',
'{{ region }}'
RETURNING
id,
name,
action,
blockOverrideDnsType,
blockOverrideDomain,
blockOverrideTtl,
blockResponse,
confidenceThreshold,
createdAt,
description,
dnsAdvancedProtection,
dnsViewId,
firewallDomainListId,
priority,
queryType,
status,
updatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewall_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the firewall_rules resource.
    - name: action
      value: "{{ action }}"
      valid_values: ['ALLOW', 'ALERT', 'BLOCK']
    - name: blockOverrideDnsType
      value: "{{ blockOverrideDnsType }}"
      valid_values: ['CNAME']
    - name: blockOverrideDomain
      value: "{{ blockOverrideDomain }}"
    - name: blockOverrideTtl
      value: {{ blockOverrideTtl }}
    - name: blockResponse
      value: "{{ blockResponse }}"
      valid_values: ['NODATA', 'NXDOMAIN', 'OVERRIDE']
    - name: clientToken
      value: "{{ clientToken }}"
    - name: confidenceThreshold
      value: "{{ confidenceThreshold }}"
      valid_values: ['LOW', 'MEDIUM', 'HIGH']
    - name: description
      value: "{{ description }}"
    - name: dnsAdvancedProtection
      value: "{{ dnsAdvancedProtection }}"
      valid_values: ['DGA', 'DNS_TUNNELING', 'DICTIONARY_DGA']
    - name: firewallDomainListId
      value: "{{ firewallDomainListId }}"
    - name: name
      value: "{{ name }}"
    - name: priority
      value: {{ priority }}
    - name: dnsViewId
      value: "{{ dnsViewId }}"
    - name: qType
      value: "{{ qType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_firewall_rule"
    values={[
        { label: 'update_firewall_rule', value: 'update_firewall_rule' }
    ]}
>
<TabItem value="update_firewall_rule">

Updates the configuration of a DNS firewall rule. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
UPDATE aws.route53globalresolver.firewall_rules
SET 
action = '{{ action }}',
blockOverrideDnsType = '{{ blockOverrideDnsType }}',
blockOverrideDomain = '{{ blockOverrideDomain }}',
blockOverrideTtl = {{ blockOverrideTtl }},
blockResponse = '{{ blockResponse }}',
clientToken = '{{ clientToken }}',
confidenceThreshold = '{{ confidenceThreshold }}',
description = '{{ description }}',
dnsAdvancedProtection = '{{ dnsAdvancedProtection }}',
name = '{{ name }}',
priority = {{ priority }}
WHERE 
firewall_rule_id = '{{ firewall_rule_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
id,
name,
action,
blockOverrideDnsType,
blockOverrideDomain,
blockOverrideTtl,
blockResponse,
confidenceThreshold,
createdAt,
description,
dnsAdvancedProtection,
dnsViewId,
firewallDomainListId,
priority,
queryType,
status,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_firewall_rule"
    values={[
        { label: 'delete_firewall_rule', value: 'delete_firewall_rule' }
    ]}
>
<TabItem value="delete_firewall_rule">

Deletes a DNS firewall rule. This operation cannot be undone. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
DELETE FROM aws.route53globalresolver.firewall_rules
WHERE firewall_rule_id = '{{ firewall_rule_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
