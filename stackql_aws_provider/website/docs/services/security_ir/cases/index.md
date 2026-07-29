--- 
title: cases
hide_title: false
hide_table_of_contents: false
keywords:
  - cases
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

Creates, updates, deletes, gets or lists a <code>cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.security_ir.cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_case"
    values={[
        { label: 'get_case', value: 'get_case' },
        { label: 'list_cases', value: 'list_cases' }
    ]}
>
<TabItem value="get_case">

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
    <td><CopyableCode code="actual_incident_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Response element for GetCase that provides the actual incident start date as identified by data analysis during the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="case_arn" /></td>
    <td><code>string</code></td>
    <td>Response element for GetCase that provides the case ARN (pattern: &lt;code&gt;arn:aws:security-ir:\w+?-\w+?-\d+:&#91;0-9&#93;&#123;12&#125;:case/&#91;0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="case_attachments" /></td>
    <td><code>array</code></td>
    <td>Response element for GetCase that provides a list of current case attachments.</td>
</tr>
<tr>
    <td><CopyableCode code="case_metadata" /></td>
    <td><code>array</code></td>
    <td>Case response metadata</td>
</tr>
<tr>
    <td><CopyableCode code="case_status" /></td>
    <td><code>string</code></td>
    <td>Response element for GetCase that provides the case status. Options for statuses include Submitted | Detection and Analysis | Eradication, Containment and Recovery | Post-Incident Activities | Closed (Submitted, Acknowledged, Detection and Analysis, Containment, Eradication and Recovery, Post-incident Activities, Ready to Close, Closed)</td>
</tr>
<tr>
    <td><CopyableCode code="closed_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Response element for GetCase that provides the date a specified case was closed.</td>
</tr>
<tr>
    <td><CopyableCode code="closure_code" /></td>
    <td><code>string</code></td>
    <td>Response element for GetCase that provides the summary code for why a case was closed. (Investigation Completed, Not Resolved, False Positive, Duplicate)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Response element for GetCase that provides the date the case was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Response element for GetCase that provides contents of the case description.</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_type" /></td>
    <td><code>string</code></td>
    <td>Response element for GetCase that provides the engagement type. Options for engagement type include Active Security Event | Investigations (Security Incident, Investigation)</td>
</tr>
<tr>
    <td><CopyableCode code="impacted_accounts" /></td>
    <td><code>array</code></td>
    <td>Response element for GetCase that provides a list of impacted accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="impacted_aws_regions" /></td>
    <td><code>array</code></td>
    <td>Response element for GetCase that provides the impacted regions.</td>
</tr>
<tr>
    <td><CopyableCode code="impacted_services" /></td>
    <td><code>array</code></td>
    <td>Response element for GetCase that provides a list of impacted services.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Response element for GetCase that provides the date a case was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_action" /></td>
    <td><code>string</code></td>
    <td>Response element for GetCase that identifies the case is waiting on customer input. (Customer, None)</td>
</tr>
<tr>
    <td><CopyableCode code="reported_incident_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Response element for GetCase that provides the customer provided incident start date.</td>
</tr>
<tr>
    <td><CopyableCode code="resolver_type" /></td>
    <td><code>string</code></td>
    <td>Response element for GetCase that provides the current resolver types. (AWS, Self)</td>
</tr>
<tr>
    <td><CopyableCode code="threat_actor_ip_addresses" /></td>
    <td><code>array</code></td>
    <td>Response element for GetCase that provides a list of suspicious IP addresses associated with unauthorized activity.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>Response element for GetCase that provides the case title.</td>
</tr>
<tr>
    <td><CopyableCode code="watchers" /></td>
    <td><code>array</code></td>
    <td>Response element for GetCase that provides a list of Watchers added to the case.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cases">

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
    <td><CopyableCode code="case_arn" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;arn:aws:security-ir:\w+?-\w+?-\d+:&#91;0-9&#93;&#123;12&#125;:case/&#91;0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;\d&#123;10,32&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="case_status" /></td>
    <td><code>string</code></td>
    <td> (Submitted, Acknowledged, Detection and Analysis, Containment, Eradication and Recovery, Post-incident Activities, Ready to Close, Closed)</td>
</tr>
<tr>
    <td><CopyableCode code="closed_date" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="engagement_type" /></td>
    <td><code>string</code></td>
    <td> (Security Incident, Investigation)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pending_action" /></td>
    <td><code>string</code></td>
    <td> (Customer, None)</td>
</tr>
<tr>
    <td><CopyableCode code="resolver_type" /></td>
    <td><code>string</code></td>
    <td> (AWS, Self)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_case"><CopyableCode code="get_case" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the attributes of a case.</td>
</tr>
<tr>
    <td><a href="#list_cases"><CopyableCode code="list_cases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all cases the requester has access to.</td>
</tr>
<tr>
    <td><a href="#create_case"><CopyableCode code="create_case" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resolverType"><code>resolverType</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-engagementType"><code>engagementType</code></a>, <a href="#parameter-reportedIncidentStartDate"><code>reportedIncidentStartDate</code></a>, <a href="#parameter-impactedAccounts"><code>impactedAccounts</code></a>, <a href="#parameter-watchers"><code>watchers</code></a></td>
    <td></td>
    <td>Creates a new case.</td>
</tr>
<tr>
    <td><a href="#update_case_status"><CopyableCode code="update_case_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-caseStatus"><code>caseStatus</code></a></td>
    <td></td>
    <td>Updates the state transitions for a designated cases. Self-managed: the following states are available for self-managed cases. Submitted → Detection and Analysis Detection and Analysis → Containment, Eradication, and Recovery Detection and Analysis → Post-incident Activities Containment, Eradication, and Recovery → Detection and Analysis Containment, Eradication, and Recovery → Post-incident Activities Post-incident Activities → Containment, Eradication, and Recovery Post-incident Activities → Detection and Analysis Any → Closed AWS supported: You must use the CloseCase API to close.</td>
</tr>
<tr>
    <td><a href="#update_resolver_type"><CopyableCode code="update_resolver_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resolverType"><code>resolverType</code></a></td>
    <td></td>
    <td>Updates the resolver type for a case. This is a one-way action and cannot be reversed.</td>
</tr>
<tr>
    <td><a href="#update_case"><CopyableCode code="update_case" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing case.</td>
</tr>
<tr>
    <td><a href="#close_case"><CopyableCode code="close_case" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Closes an existing case.</td>
</tr>
<tr>
    <td><a href="#send_feedback"><CopyableCode code="send_feedback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-result_id"><code>result_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-usefulness"><code>usefulness</code></a></td>
    <td></td>
    <td>Send feedback based on response investigation action</td>
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
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>Send feedback based on request caseID</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-result_id">
    <td><CopyableCode code="result_id" /></td>
    <td><code>string</code></td>
    <td>Send feedback based on request result ID</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_case"
    values={[
        { label: 'get_case', value: 'get_case' },
        { label: 'list_cases', value: 'list_cases' }
    ]}
>
<TabItem value="get_case">

Returns the attributes of a case.

```sql
SELECT
actual_incident_start_date,
case_arn,
case_attachments,
case_metadata,
case_status,
closed_date,
closure_code,
created_date,
description,
engagement_type,
impacted_accounts,
impacted_aws_regions,
impacted_services,
last_updated_date,
pending_action,
reported_incident_start_date,
resolver_type,
threat_actor_ip_addresses,
title_,
watchers
FROM aws.security_ir.cases
WHERE case_id = '{{ case_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cases">

Lists all cases the requester has access to.

```sql
SELECT
case_arn,
case_id,
case_status,
closed_date,
created_date,
engagement_type,
last_updated_date,
pending_action,
resolver_type,
title_
FROM aws.security_ir.cases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_case"
    values={[
        { label: 'create_case', value: 'create_case' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_case">

Creates a new case.

```sql
INSERT INTO aws.security_ir.cases (
clientToken,
resolverType,
title,
description,
engagementType,
reportedIncidentStartDate,
impactedAccounts,
watchers,
threatActorIpAddresses,
impactedServices,
impactedAwsRegions,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ resolverType }}' /* required */,
'{{ title }}' /* required */,
'{{ description }}' /* required */,
'{{ engagementType }}' /* required */,
'{{ reportedIncidentStartDate }}' /* required */,
'{{ impactedAccounts }}' /* required */,
'{{ watchers }}' /* required */,
'{{ threatActorIpAddresses }}',
'{{ impactedServices }}',
'{{ impactedAwsRegions }}',
'{{ tags }}',
'{{ region }}'
RETURNING
case_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cases resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: resolverType
      value: "{{ resolverType }}"
      valid_values: ['AWS', 'Self']
    - name: title
      value: "{{ title }}"
    - name: description
      value: "{{ description }}"
    - name: engagementType
      value: "{{ engagementType }}"
      valid_values: ['Security Incident', 'Investigation']
    - name: reportedIncidentStartDate
      value: "{{ reportedIncidentStartDate }}"
    - name: impactedAccounts
      value:
        - "{{ impactedAccounts }}"
    - name: watchers
      value:
        - email: "{{ email }}"
          name: "{{ name }}"
          jobTitle: "{{ jobTitle }}"
    - name: threatActorIpAddresses
      value:
        - ipAddress: "{{ ipAddress }}"
          userAgent: "{{ userAgent }}"
    - name: impactedServices
      value:
        - "{{ impactedServices }}"
    - name: impactedAwsRegions
      value:
        - region: "{{ region }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_case_status"
    values={[
        { label: 'update_case_status', value: 'update_case_status' },
        { label: 'update_resolver_type', value: 'update_resolver_type' },
        { label: 'update_case', value: 'update_case' }
    ]}
>
<TabItem value="update_case_status">

Updates the state transitions for a designated cases. Self-managed: the following states are available for self-managed cases. Submitted → Detection and Analysis Detection and Analysis → Containment, Eradication, and Recovery Detection and Analysis → Post-incident Activities Containment, Eradication, and Recovery → Detection and Analysis Containment, Eradication, and Recovery → Post-incident Activities Post-incident Activities → Containment, Eradication, and Recovery Post-incident Activities → Detection and Analysis Any → Closed AWS supported: You must use the CloseCase API to close.

```sql
UPDATE aws.security_ir.cases
SET 
caseStatus = '{{ caseStatus }}'
WHERE 
case_id = '{{ case_id }}' --required
AND region = '{{ region }}' --required
AND caseStatus = '{{ caseStatus }}' --required
RETURNING
case_status;
```
</TabItem>
<TabItem value="update_resolver_type">

Updates the resolver type for a case. This is a one-way action and cannot be reversed.

```sql
UPDATE aws.security_ir.cases
SET 
resolverType = '{{ resolverType }}'
WHERE 
case_id = '{{ case_id }}' --required
AND region = '{{ region }}' --required
AND resolverType = '{{ resolverType }}' --required
RETURNING
case_id,
case_status,
resolver_type;
```
</TabItem>
<TabItem value="update_case">

Updates an existing case.

```sql
UPDATE aws.security_ir.cases
SET 
title = '{{ title }}',
description = '{{ description }}',
reportedIncidentStartDate = '{{ reportedIncidentStartDate }}',
actualIncidentStartDate = '{{ actualIncidentStartDate }}',
engagementType = '{{ engagementType }}',
watchersToAdd = '{{ watchersToAdd }}',
watchersToDelete = '{{ watchersToDelete }}',
threatActorIpAddressesToAdd = '{{ threatActorIpAddressesToAdd }}',
threatActorIpAddressesToDelete = '{{ threatActorIpAddressesToDelete }}',
impactedServicesToAdd = '{{ impactedServicesToAdd }}',
impactedServicesToDelete = '{{ impactedServicesToDelete }}',
impactedAwsRegionsToAdd = '{{ impactedAwsRegionsToAdd }}',
impactedAwsRegionsToDelete = '{{ impactedAwsRegionsToDelete }}',
impactedAccountsToAdd = '{{ impactedAccountsToAdd }}',
impactedAccountsToDelete = '{{ impactedAccountsToDelete }}',
caseMetadata = '{{ caseMetadata }}'
WHERE 
case_id = '{{ case_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="close_case"
    values={[
        { label: 'close_case', value: 'close_case' },
        { label: 'send_feedback', value: 'send_feedback' }
    ]}
>
<TabItem value="close_case">

Closes an existing case.

```sql
EXEC aws.security_ir.cases.close_case 
@case_id='{{ case_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="send_feedback">

Send feedback based on response investigation action

```sql
EXEC aws.security_ir.cases.send_feedback 
@case_id='{{ case_id }}' --required, 
@result_id='{{ result_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"usefulness": "{{ usefulness }}", 
"comment": "{{ comment }}"
}'
;
```
</TabItem>
</Tabs>
