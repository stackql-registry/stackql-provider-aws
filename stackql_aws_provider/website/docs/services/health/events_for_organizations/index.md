--- 
title: events_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - events_for_organizations
  - health
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

Creates, updates, deletes, gets or lists an <code>events_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.health.events_for_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_events_for_organization"
    values={[
        { label: 'describe_events_for_organization', value: 'describe_events_for_organization' }
    ]}
>
<TabItem value="describe_events_for_organization">

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
    <td><CopyableCode code="actionability" /></td>
    <td><code>string</code></td>
    <td>The actionability classification of the event. Possible values are ACTION_REQUIRED, ACTION_MAY_BE_REQUIRED and INFORMATIONAL. Events with ACTION_REQUIRED actionability require customer action to resolve or mitigate the event. Events with ACTION_MAY_BE_REQUIRED actionability indicates that the current status is unknown or conditional and inspection is needed to determine if action is required. Events with INFORMATIONAL actionability are provided for awareness and do not require immediate action. (ACTION_REQUIRED, ACTION_MAY_BE_REQUIRED, INFORMATIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the event. The event ARN has the arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID format. For example, an event ARN might look like the following: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456 (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+(-&#91;a-z&#93;+)?)?:health:&#91;^:&#93;*:&#91;^:&#93;*:event(?:/&#91;\w-&#93;+)&#123;3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the event ended.</td>
</tr>
<tr>
    <td><CopyableCode code="event_scope_code" /></td>
    <td><code>string</code></td>
    <td>This parameter specifies if the Health event is a public Amazon Web Services service event or an account-specific event. If the eventScopeCode value is PUBLIC, then the affectedAccounts value is always empty. If the eventScopeCode value is ACCOUNT_SPECIFIC, then the affectedAccounts value lists the affected Amazon Web Services accounts in your organization. For example, if an event affects a service such as Amazon Elastic Compute Cloud and you have Amazon Web Services accounts that use that service, those account IDs appear in the response. If the eventScopeCode value is NONE, then the eventArn that you specified in the request is invalid or doesn't exist. (PUBLIC, ACCOUNT_SPECIFIC, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type_category" /></td>
    <td><code>string</code></td>
    <td>A list of event type category codes. Possible values are issue, accountNotification, or scheduledChange. Currently, the investigation value isn't supported at this time. (issue, accountNotification, scheduledChange, investigation)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type_code" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the event type. The format is AWS_SERVICE_DESCRIPTION. For example, AWS_EC2_SYSTEM_MAINTENANCE_EVENT. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\_\-&#93;&#123;3,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date and time that the event was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="personas" /></td>
    <td><code>array</code></td>
    <td>A list of persona classifications that indicate the target audience for the event. Possible values are OPERATIONS, SECURITY, and BILLING. Events can be associated with multiple personas to indicate relevance to different teams or roles within an organization.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region name of the event. (pattern: &lt;code&gt;&#91;^:/&#93;&#123;2,25&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service that is affected by the event, such as EC2 and RDS. (pattern: &lt;code&gt;&#91;^:/&#93;&#123;2,30&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the event began.</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>The most recent status of the event. Possible values are open, closed, and upcoming. (open, closed, upcoming)</td>
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
    <td><a href="#describe_events_for_organization"><CopyableCode code="describe_events_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about events across your organization in Organizations. You can use thefilters parameter to specify the events that you want to return. Events are returned in a summary form and don't include the affected accounts, detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the following operations: DescribeAffectedAccountsForOrganization DescribeEventDetailsForOrganization DescribeAffectedEntitiesForOrganization If you don't specify a filter, the DescribeEventsForOrganizations returns all events across your organization. Results are sorted by lastModifiedTime, starting with the most recent event. For more information about the different types of Health events, see Event. Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the EnableHealthServiceAccessForOrganization operation from your organization's management account. This API operation uses pagination. Specify the nextToken parameter in the next request to return more results.</td>
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
    defaultValue="describe_events_for_organization"
    values={[
        { label: 'describe_events_for_organization', value: 'describe_events_for_organization' }
    ]}
>
<TabItem value="describe_events_for_organization">

Returns information about events across your organization in Organizations. You can use thefilters parameter to specify the events that you want to return. Events are returned in a summary form and don't include the affected accounts, detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the following operations: DescribeAffectedAccountsForOrganization DescribeEventDetailsForOrganization DescribeAffectedEntitiesForOrganization If you don't specify a filter, the DescribeEventsForOrganizations returns all events across your organization. Results are sorted by lastModifiedTime, starting with the most recent event. For more information about the different types of Health events, see Event. Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the EnableHealthServiceAccessForOrganization operation from your organization's management account. This API operation uses pagination. Specify the nextToken parameter in the next request to return more results.

```sql
SELECT
actionability,
arn,
end_time,
event_scope_code,
event_type_category,
event_type_code,
last_updated_time,
personas,
region,
service,
start_time,
status_code
FROM aws.health.events_for_organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
