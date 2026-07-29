--- 
title: memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - memberships
  - security_ir
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

Creates, updates, deletes, gets or lists a <code>memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.security_ir.memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_membership"
    values={[
        { label: 'get_membership', value: 'get_membership' },
        { label: 'list_memberships', value: 'list_memberships' }
    ]}
>
<TabItem value="get_membership">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>Response element for GetMembership that provides the account configured to manage the membership. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_type" /></td>
    <td><code>string</code></td>
    <td>Response element for GetMembership that provides the configured membership type. Options include Standalone | Organizations. (Standalone, Organization)</td>
</tr>
<tr>
    <td><CopyableCode code="incident_response_team" /></td>
    <td><code>array</code></td>
    <td>Response element for GetMembership that provides the configured membership incident response team members.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_accounts_configurations" /></td>
    <td><code>object</code></td>
    <td>The membershipAccountsConfigurations field contains the configuration details for member accounts within the Amazon Web Services Organizations membership structure. This field returns a structure containing information about: Account configurations for member accounts Membership settings and preferences Account-level permissions and roles</td>
</tr>
<tr>
    <td><CopyableCode code="membership_activation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Response element for GetMembership that provides the configured membership activation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>Response element for GetMembership that provides the membership ARN. (pattern: &lt;code&gt;arn:aws:security-ir:\w+?-\w+?-\d+:&#91;0-9&#93;&#123;12&#125;:membership/m-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_deactivation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Response element for GetMembership that provides the configured membership name deactivation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>Response element for GetMembership that provides the queried membership ID. (pattern: &lt;code&gt;m-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_name" /></td>
    <td><code>string</code></td>
    <td>Response element for GetMembership that provides the configured membership name.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_status" /></td>
    <td><code>string</code></td>
    <td>Response element for GetMembership that provides the current membership status. (Active, Cancelled, Terminated)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_accounts_covered" /></td>
    <td><code>integer (int64)</code></td>
    <td>Response element for GetMembership that provides the number of accounts in the membership.</td>
</tr>
<tr>
    <td><CopyableCode code="opt_in_features" /></td>
    <td><code>array</code></td>
    <td>Response element for GetMembership that provides the if opt-in features have been enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Response element for GetMembership that provides the region configured to manage the membership. (af-south-1, ap-east-1, ap-east-2, ap-northeast-1, ap-northeast-2, ap-northeast-3, ap-south-1, ap-south-2, ap-southeast-1, ap-southeast-2, ap-southeast-3, ap-southeast-4, ap-southeast-5, ap-southeast-6, ap-southeast-7, ca-central-1, ca-west-1, cn-north-1, cn-northwest-1, eu-central-1, eu-central-2, eu-north-1, eu-south-1, eu-south-2, eu-west-1, eu-west-2, eu-west-3, il-central-1, me-central-1, me-south-1, mx-central-1, sa-east-1, us-east-1, us-east-2, us-west-1, us-west-2)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_memberships">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;arn:aws:security-ir:\w+?-\w+?-\d+:&#91;0-9&#93;&#123;12&#125;:membership/m-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;m-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_status" /></td>
    <td><code>string</code></td>
    <td> (Active, Cancelled, Terminated)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td> (af-south-1, ap-east-1, ap-east-2, ap-northeast-1, ap-northeast-2, ap-northeast-3, ap-south-1, ap-south-2, ap-southeast-1, ap-southeast-2, ap-southeast-3, ap-southeast-4, ap-southeast-5, ap-southeast-6, ap-southeast-7, ca-central-1, ca-west-1, cn-north-1, cn-northwest-1, eu-central-1, eu-central-2, eu-north-1, eu-south-1, eu-south-2, eu-west-1, eu-west-2, eu-west-3, il-central-1, me-central-1, me-south-1, mx-central-1, sa-east-1, us-east-1, us-east-2, us-west-1, us-west-2)</td>
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
    <td><a href="#get_membership"><CopyableCode code="get_membership" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_id"><code>membership_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the attributes of a membership.</td>
</tr>
<tr>
    <td><a href="#list_memberships"><CopyableCode code="list_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the memberships that the calling principal can access.</td>
</tr>
<tr>
    <td><a href="#create_membership"><CopyableCode code="create_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-membershipName"><code>membershipName</code></a>, <a href="#parameter-incidentResponseTeam"><code>incidentResponseTeam</code></a></td>
    <td></td>
    <td>Creates a new membership.</td>
</tr>
<tr>
    <td><a href="#update_membership"><CopyableCode code="update_membership" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-membership_id"><code>membership_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates membership configuration.</td>
</tr>
<tr>
    <td><a href="#cancel_membership"><CopyableCode code="cancel_membership" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-membership_id"><code>membership_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels an existing membership.</td>
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
<tr id="parameter-membership_id">
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>Required element used in combination with CancelMembershipRequest to identify the membership ID to cancel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_membership"
    values={[
        { label: 'get_membership', value: 'get_membership' },
        { label: 'list_memberships', value: 'list_memberships' }
    ]}
>
<TabItem value="get_membership">

Returns the attributes of a membership.

```sql
SELECT
account_id,
customer_type,
incident_response_team,
membership_accounts_configurations,
membership_activation_timestamp,
membership_arn,
membership_deactivation_timestamp,
membership_id,
membership_name,
membership_status,
number_of_accounts_covered,
opt_in_features,
region
FROM aws.security_ir.memberships
WHERE membership_id = '{{ membership_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_memberships">

Returns the memberships that the calling principal can access.

```sql
SELECT
account_id,
membership_arn,
membership_id,
membership_status,
region
FROM aws.security_ir.memberships
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_membership"
    values={[
        { label: 'create_membership', value: 'create_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_membership">

Creates a new membership.

```sql
INSERT INTO aws.security_ir.memberships (
clientToken,
membershipName,
incidentResponseTeam,
optInFeatures,
tags,
coverEntireOrganization,
region
)
SELECT 
'{{ clientToken }}',
'{{ membershipName }}' /* required */,
'{{ incidentResponseTeam }}' /* required */,
'{{ optInFeatures }}',
'{{ tags }}',
{{ coverEntireOrganization }},
'{{ region }}'
RETURNING
membership_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: memberships
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the memberships resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: membershipName
      value: "{{ membershipName }}"
    - name: incidentResponseTeam
      value:
        - name: "{{ name }}"
          jobTitle: "{{ jobTitle }}"
          email: "{{ email }}"
          communicationPreferences: "{{ communicationPreferences }}"
    - name: optInFeatures
      value:
        - featureName: "{{ featureName }}"
          isEnabled: {{ isEnabled }}
    - name: tags
      value: "{{ tags }}"
    - name: coverEntireOrganization
      value: {{ coverEntireOrganization }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_membership"
    values={[
        { label: 'update_membership', value: 'update_membership' }
    ]}
>
<TabItem value="update_membership">

Updates membership configuration.

```sql
UPDATE aws.security_ir.memberships
SET 
membershipName = '{{ membershipName }}',
incidentResponseTeam = '{{ incidentResponseTeam }}',
optInFeatures = '{{ optInFeatures }}',
membershipAccountsConfigurationsUpdate = '{{ membershipAccountsConfigurationsUpdate }}',
undoMembershipCancellation = {{ undoMembershipCancellation }}
WHERE 
membership_id = '{{ membership_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_membership"
    values={[
        { label: 'cancel_membership', value: 'cancel_membership' }
    ]}
>
<TabItem value="cancel_membership">

Cancels an existing membership.

```sql
EXEC aws.security_ir.memberships.cancel_membership 
@membership_id='{{ membership_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
