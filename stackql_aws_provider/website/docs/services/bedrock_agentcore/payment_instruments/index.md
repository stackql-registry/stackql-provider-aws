--- 
title: payment_instruments
hide_title: false
hide_table_of_contents: false
keywords:
  - payment_instruments
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists a <code>payment_instruments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payment_instruments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.payment_instruments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_payment_instrument"
    values={[
        { label: 'get_payment_instrument', value: 'get_payment_instrument' },
        { label: 'list_payment_instruments', value: 'list_payment_instruments' }
    ]}
>
<TabItem value="get_payment_instrument">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this payment instrument was created.</td>
</tr>
<tr>
    <td><CopyableCode code="payment_connector_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the payment connector associated with this instrument. (pattern: &lt;code&gt;(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,100&#125;-&#91;0-9a-z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_instrument_details" /></td>
    <td><code>object</code></td>
    <td>Details specific to the instrument type</td>
</tr>
<tr>
    <td><CopyableCode code="payment_instrument_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this payment instrument. (pattern: &lt;code&gt;payment-instrument-&#91;0-9a-zA-Z-&#93;&#123;15&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_instrument_type" /></td>
    <td><code>string</code></td>
    <td>The type of payment instrument (EMBEDDED_CRYPTO_WALLET)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_manager_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the payment manager that owns this payment instrument. (pattern: &lt;code&gt;arn:(aws|aws-&#91;a-z0-9-&#93;+):bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:payment-manager/&#91;a-z0-9&#93;(&#91;a-z0-9-&#93;&#123;0,47&#125;&#91;a-z0-9&#93;)?-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this payment instrument. (INITIATED, ACTIVE, FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this payment instrument was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID associated with this payment instrument.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_payment_instruments">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this payment instrument was created.</td>
</tr>
<tr>
    <td><CopyableCode code="payment_connector_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the payment connector associated with this instrument. (pattern: &lt;code&gt;(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,100&#125;-&#91;0-9a-z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_instrument_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this payment instrument. (pattern: &lt;code&gt;payment-instrument-&#91;0-9a-zA-Z-&#93;&#123;15&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_instrument_type" /></td>
    <td><code>string</code></td>
    <td>The type of payment instrument (EMBEDDED_CRYPTO_WALLET)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_manager_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the payment manager that owns this payment instrument. (pattern: &lt;code&gt;arn:(aws|aws-&#91;a-z0-9-&#93;+):bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:payment-manager/&#91;a-z0-9&#93;(&#91;a-z0-9-&#93;&#123;0,47&#125;&#91;a-z0-9&#93;)?-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this payment instrument. (INITIATED, ACTIVE, FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this payment instrument was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID associated with this payment instrument.</td>
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
    <td><a href="#get_payment_instrument"><CopyableCode code="get_payment_instrument" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id"><code>X-Amzn-Bedrock-AgentCore-Payments-User-Id</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"><code>X-Amzn-Bedrock-AgentCore-Payments-Agent-Name</code></a></td>
    <td>Get a payment instrument by ID</td>
</tr>
<tr>
    <td><a href="#list_payment_instruments"><CopyableCode code="list_payment_instruments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id"><code>X-Amzn-Bedrock-AgentCore-Payments-User-Id</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"><code>X-Amzn-Bedrock-AgentCore-Payments-Agent-Name</code></a></td>
    <td>List payment instruments for a manager</td>
</tr>
<tr>
    <td><a href="#create_payment_instrument"><CopyableCode code="create_payment_instrument" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-paymentManagerArn"><code>paymentManagerArn</code></a>, <a href="#parameter-paymentConnectorId"><code>paymentConnectorId</code></a>, <a href="#parameter-paymentInstrumentType"><code>paymentInstrumentType</code></a>, <a href="#parameter-paymentInstrumentDetails"><code>paymentInstrumentDetails</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id"><code>X-Amzn-Bedrock-AgentCore-Payments-User-Id</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"><code>X-Amzn-Bedrock-AgentCore-Payments-Agent-Name</code></a></td>
    <td>Create a new payment instrument for a connector</td>
</tr>
<tr>
    <td><a href="#delete_payment_instrument"><CopyableCode code="delete_payment_instrument" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id"><code>X-Amzn-Bedrock-AgentCore-Payments-User-Id</code></a></td>
    <td>Delete a payment instrument Marks a payment instrument as deleted by updating its status to DELETED. This is a soft delete operation that preserves the record in the database for audit and compliance purposes. The record remains queryable for audit purposes but is excluded from normal list and get operations. Deleting an already-deleted or non-existent instrument returns ResourceNotFoundException (404). Authorization: The caller must own the instrument (accountId, userId, and paymentManagerId must match). If authorization fails, a 403 Forbidden error is returned. Timestamp Management: The updatedAt timestamp is set to the current time, while createdAt is preserved. The version field is incremented for optimistic locking. Errors: ResourceNotFoundException: The instrument does not exist or is already deleted AccessDeniedException: The caller is not authorized to delete this instrument ValidationException: Required fields are missing or invalid InternalServerException: An unexpected server error occurred</td>
</tr>
<tr>
    <td><a href="#process_payment"><CopyableCode code="process_payment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-paymentManagerArn"><code>paymentManagerArn</code></a>, <a href="#parameter-paymentSessionId"><code>paymentSessionId</code></a>, <a href="#parameter-paymentInstrumentId"><code>paymentInstrumentId</code></a>, <a href="#parameter-paymentType"><code>paymentType</code></a>, <a href="#parameter-paymentInput"><code>paymentInput</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id"><code>X-Amzn-Bedrock-AgentCore-Payments-User-Id</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"><code>X-Amzn-Bedrock-AgentCore-Payments-Agent-Name</code></a></td>
    <td>Process a payment transaction</td>
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
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Payments-Agent-Name" /></td>
    <td><code>string</code></td>
    <td>The agent name associated with this request, used for observability.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Payments-User-Id" /></td>
    <td><code>string</code></td>
    <td>The user ID associated with this payment.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_payment_instrument"
    values={[
        { label: 'get_payment_instrument', value: 'get_payment_instrument' },
        { label: 'list_payment_instruments', value: 'list_payment_instruments' }
    ]}
>
<TabItem value="get_payment_instrument">

Get a payment instrument by ID

```sql
SELECT
created_at,
payment_connector_id,
payment_instrument_details,
payment_instrument_id,
payment_instrument_type,
payment_manager_arn,
status,
updated_at,
user_id
FROM aws.bedrock_agentcore.payment_instruments
WHERE region = '{{ region }}' -- required
AND `X-Amzn-Bedrock-AgentCore-Payments-User-Id` = '{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}'
AND `X-Amzn-Bedrock-AgentCore-Payments-Agent-Name` = '{{ X-Amzn-Bedrock-AgentCore-Payments-Agent-Name }}'
;
```
</TabItem>
<TabItem value="list_payment_instruments">

List payment instruments for a manager

```sql
SELECT
created_at,
payment_connector_id,
payment_instrument_id,
payment_instrument_type,
payment_manager_arn,
status,
updated_at,
user_id
FROM aws.bedrock_agentcore.payment_instruments
WHERE region = '{{ region }}' -- required
AND `X-Amzn-Bedrock-AgentCore-Payments-User-Id` = '{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}'
AND `X-Amzn-Bedrock-AgentCore-Payments-Agent-Name` = '{{ X-Amzn-Bedrock-AgentCore-Payments-Agent-Name }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_payment_instrument"
    values={[
        { label: 'create_payment_instrument', value: 'create_payment_instrument' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_payment_instrument">

Create a new payment instrument for a connector

```sql
INSERT INTO aws.bedrock_agentcore.payment_instruments (
paymentManagerArn,
paymentConnectorId,
paymentInstrumentType,
paymentInstrumentDetails,
clientToken,
region,
`X-Amzn-Bedrock-AgentCore-Payments-User-Id`,
`X-Amzn-Bedrock-AgentCore-Payments-Agent-Name`
)
SELECT 
'{{ paymentManagerArn }}' /* required */,
'{{ paymentConnectorId }}' /* required */,
'{{ paymentInstrumentType }}' /* required */,
'{{ paymentInstrumentDetails }}' /* required */,
'{{ clientToken }}',
'{{ region }}',
'{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}',
'{{ X-Amzn-Bedrock-AgentCore-Payments-Agent-Name }}'
RETURNING
payment_instrument
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: payment_instruments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the payment_instruments resource.
    - name: paymentManagerArn
      value: "{{ paymentManagerArn }}"
    - name: paymentConnectorId
      value: "{{ paymentConnectorId }}"
    - name: paymentInstrumentType
      value: "{{ paymentInstrumentType }}"
      description: |
        The type of payment instrument
      valid_values: ['EMBEDDED_CRYPTO_WALLET']
    - name: paymentInstrumentDetails
      description: |
        Details specific to the instrument type
      value:
        embeddedCryptoWallet:
          network: "{{ network }}"
          linkedAccounts:
            - email:
                emailAddress: "{{ emailAddress }}"
              sms:
                phoneNumber: "{{ phoneNumber }}"
              developerJwt:
                kid: "{{ kid }}"
                sub: "{{ sub }}"
              oAuth2:
                google:
                  sub: "{{ sub }}"
                  emailAddress: "{{ emailAddress }}"
                  name: "{{ name }}"
                  username: "{{ username }}"
                apple:
                  sub: "{{ sub }}"
                  emailAddress: "{{ emailAddress }}"
                  name: "{{ name }}"
                  username: "{{ username }}"
                x:
                  sub: "{{ sub }}"
                  emailAddress: "{{ emailAddress }}"
                  name: "{{ name }}"
                  username: "{{ username }}"
                telegram:
                  sub: "{{ sub }}"
                  emailAddress: "{{ emailAddress }}"
                  name: "{{ name }}"
                  username: "{{ username }}"
                github:
                  sub: "{{ sub }}"
                  emailAddress: "{{ emailAddress }}"
                  name: "{{ name }}"
                  username: "{{ username }}"
          walletAddress: "{{ walletAddress }}"
          redirectUrl: "{{ redirectUrl }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: X-Amzn-Bedrock-AgentCore-Payments-User-Id
      value: "{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}"
      description: The user ID associated with this payment instrument.
      description: The user ID associated with this payment instrument.
    - name: X-Amzn-Bedrock-AgentCore-Payments-Agent-Name
      value: "{{ X-Amzn-Bedrock-AgentCore-Payments-Agent-Name }}"
      description: The agent name associated with this request, used for observability.
      description: The agent name associated with this request, used for observability.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_payment_instrument"
    values={[
        { label: 'delete_payment_instrument', value: 'delete_payment_instrument' }
    ]}
>
<TabItem value="delete_payment_instrument">

Delete a payment instrument Marks a payment instrument as deleted by updating its status to DELETED. This is a soft delete operation that preserves the record in the database for audit and compliance purposes. The record remains queryable for audit purposes but is excluded from normal list and get operations. Deleting an already-deleted or non-existent instrument returns ResourceNotFoundException (404). Authorization: The caller must own the instrument (accountId, userId, and paymentManagerId must match). If authorization fails, a 403 Forbidden error is returned. Timestamp Management: The updatedAt timestamp is set to the current time, while createdAt is preserved. The version field is incremented for optimistic locking. Errors: ResourceNotFoundException: The instrument does not exist or is already deleted AccessDeniedException: The caller is not authorized to delete this instrument ValidationException: Required fields are missing or invalid InternalServerException: An unexpected server error occurred

```sql
DELETE FROM aws.bedrock_agentcore.payment_instruments
WHERE region = '{{ region }}' --required
AND `X-Amzn-Bedrock-AgentCore-Payments-User-Id` = '{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="process_payment"
    values={[
        { label: 'process_payment', value: 'process_payment' }
    ]}
>
<TabItem value="process_payment">

Process a payment transaction

```sql
EXEC aws.bedrock_agentcore.payment_instruments.process_payment 
@region='{{ region }}' --required, 
@X-Amzn-Bedrock-AgentCore-Payments-User-Id='{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}', 
@X-Amzn-Bedrock-AgentCore-Payments-Agent-Name='{{ X-Amzn-Bedrock-AgentCore-Payments-Agent-Name }}' 
@@json=
'{
"paymentManagerArn": "{{ paymentManagerArn }}", 
"paymentSessionId": "{{ paymentSessionId }}", 
"paymentInstrumentId": "{{ paymentInstrumentId }}", 
"paymentType": "{{ paymentType }}", 
"paymentInput": "{{ paymentInput }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
