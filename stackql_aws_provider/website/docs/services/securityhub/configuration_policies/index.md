--- 
title: configuration_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_policies
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>configuration_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.configuration_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration_policy"
    values={[
        { label: 'get_configuration_policy', value: 'get_configuration_policy' },
        { label: 'list_configuration_policies', value: 'list_configuration_policies' }
    ]}
>
<TabItem value="get_configuration_policy">

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
    <td>The ARN of the configuration policy. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_policy" /></td>
    <td><code>object</code></td>
    <td>An object that defines how Security Hub CSPM is configured. It includes whether Security Hub CSPM is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub CSPM disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub CSPM enables all other controls (including newly released controls).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and ISO 8601 format, that the configuration policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configuration policy. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the configuration policy. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration policy. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configuration_policies">

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
    <td>The Amazon Resource Name (ARN) of the configuration policy. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configuration policy. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The universally unique identifier (UUID) of the configuration policy. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration policy. Alphanumeric characters and the following ASCII characters are permitted: -, ., !, *, /. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the service that the configuration policy applies to is enabled in the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.</td>
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
    <td><a href="#get_configuration_policy"><CopyableCode code="get_configuration_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a configuration policy. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.</td>
</tr>
<tr>
    <td><a href="#list_configuration_policies"><CopyableCode code="list_configuration_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists the configuration policies that the Security Hub CSPM delegated administrator has created for your organization. Only the delegated administrator can invoke this operation from the home Region.</td>
</tr>
<tr>
    <td><a href="#create_configuration_policy"><CopyableCode code="create_configuration_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationPolicy"><code>ConfigurationPolicy</code></a></td>
    <td></td>
    <td>Creates a configuration policy with the defined configuration. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.</td>
</tr>
<tr>
    <td><a href="#update_configuration_policy"><CopyableCode code="update_configuration_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a configuration policy. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_policy"><CopyableCode code="delete_configuration_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a configuration policy. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region. For the deletion to succeed, you must first disassociate a configuration policy from target accounts, organizational units, or the root by invoking the StartConfigurationPolicyDisassociation operation.</td>
</tr>
<tr>
    <td><a href="#start_configuration_policy_association"><CopyableCode code="start_configuration_policy_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationPolicyIdentifier"><code>ConfigurationPolicyIdentifier</code></a>, <a href="#parameter-Target"><code>Target</code></a></td>
    <td></td>
    <td>Associates a target account, organizational unit, or the root with a specified configuration. The target can be associated with a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.</td>
</tr>
<tr>
    <td><a href="#start_configuration_policy_disassociation"><CopyableCode code="start_configuration_policy_disassociation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationPolicyIdentifier"><code>ConfigurationPolicyIdentifier</code></a></td>
    <td></td>
    <td>Disassociates a target account, organizational unit, or the root from a specified configuration. When you disassociate a configuration from its target, the target inherits the configuration of the closest parent. If there’s no configuration to inherit, the target retains its settings but becomes a self-managed account. A target can be disassociated from a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or universally unique identifier (UUID) of the configuration policy.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that's returned by ListConfigurationPolicies in each page of the response. When this parameter is used, ListConfigurationPolicies returns the specified number of results in a single page and a NextToken response element. You can see the remaining results of the initial request by sending another ListConfigurationPolicies request with the returned NextToken value. A valid range for MaxResults is between 1 and 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The NextToken value that's returned from a previous paginated ListConfigurationPolicies request where MaxResults was used but the results exceeded the value of that parameter. Pagination continues from the MaxResults was used but the results exceeded the value of that parameter. Pagination continues from the end of the previous response that returned the NextToken value. This value is null when there are no more results to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configuration_policy"
    values={[
        { label: 'get_configuration_policy', value: 'get_configuration_policy' },
        { label: 'list_configuration_policies', value: 'list_configuration_policies' }
    ]}
>
<TabItem value="get_configuration_policy">

Provides information about a configuration policy. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.

```sql
SELECT
arn,
configuration_policy,
created_at,
description,
id,
name,
updated_at
FROM aws.securityhub.configuration_policies
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configuration_policies">

Lists the configuration policies that the Security Hub CSPM delegated administrator has created for your organization. Only the delegated administrator can invoke this operation from the home Region.

```sql
SELECT
arn,
description,
id,
name,
service_enabled,
updated_at
FROM aws.securityhub.configuration_policies
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration_policy"
    values={[
        { label: 'create_configuration_policy', value: 'create_configuration_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration_policy">

Creates a configuration policy with the defined configuration. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.

```sql
INSERT INTO aws.securityhub.configuration_policies (
Name,
Description,
ConfigurationPolicy,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ ConfigurationPolicy }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
configuration_policy,
created_at,
description,
id,
name,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configuration_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configuration_policies resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: ConfigurationPolicy
      description: |
        An object that defines how Security Hub CSPM is configured. It includes whether Security Hub CSPM is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub CSPM disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub CSPM enables all other controls (including newly released controls).
      value:
        SecurityHub:
          ServiceEnabled: {{ ServiceEnabled }}
          EnabledStandardIdentifiers:
            - "{{ EnabledStandardIdentifiers }}"
          SecurityControlsConfiguration:
            EnabledSecurityControlIdentifiers:
              - "{{ EnabledSecurityControlIdentifiers }}"
            DisabledSecurityControlIdentifiers:
              - "{{ DisabledSecurityControlIdentifiers }}"
            SecurityControlCustomParameters:
              - SecurityControlId: "{{ SecurityControlId }}"
                Parameters: "{{ Parameters }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configuration_policy"
    values={[
        { label: 'update_configuration_policy', value: 'update_configuration_policy' }
    ]}
>
<TabItem value="update_configuration_policy">

Updates a configuration policy. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.

```sql
UPDATE aws.securityhub.configuration_policies
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
UpdatedReason = '{{ UpdatedReason }}',
ConfigurationPolicy = '{{ ConfigurationPolicy }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
configuration_policy,
created_at,
description,
id,
name,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_policy"
    values={[
        { label: 'delete_configuration_policy', value: 'delete_configuration_policy' }
    ]}
>
<TabItem value="delete_configuration_policy">

Deletes a configuration policy. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region. For the deletion to succeed, you must first disassociate a configuration policy from target accounts, organizational units, or the root by invoking the StartConfigurationPolicyDisassociation operation.

```sql
DELETE FROM aws.securityhub.configuration_policies
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_configuration_policy_association"
    values={[
        { label: 'start_configuration_policy_association', value: 'start_configuration_policy_association' },
        { label: 'start_configuration_policy_disassociation', value: 'start_configuration_policy_disassociation' }
    ]}
>
<TabItem value="start_configuration_policy_association">

Associates a target account, organizational unit, or the root with a specified configuration. The target can be associated with a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.

```sql
EXEC aws.securityhub.configuration_policies.start_configuration_policy_association 
@region='{{ region }}' --required 
@@json=
'{
"ConfigurationPolicyIdentifier": "{{ ConfigurationPolicyIdentifier }}", 
"Target": "{{ Target }}"
}'
;
```
</TabItem>
<TabItem value="start_configuration_policy_disassociation">

Disassociates a target account, organizational unit, or the root from a specified configuration. When you disassociate a configuration from its target, the target inherits the configuration of the closest parent. If there’s no configuration to inherit, the target retains its settings but becomes a self-managed account. A target can be disassociated from a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.

```sql
EXEC aws.securityhub.configuration_policies.start_configuration_policy_disassociation 
@region='{{ region }}' --required 
@@json=
'{
"Target": "{{ Target }}", 
"ConfigurationPolicyIdentifier": "{{ ConfigurationPolicyIdentifier }}"
}'
;
```
</TabItem>
</Tabs>
