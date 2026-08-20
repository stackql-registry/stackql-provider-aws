--- 
title: agreements
hide_title: false
hide_table_of_contents: false
keywords:
  - agreements
  - marketplace_agreement
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

Creates, updates, deletes, gets or lists an <code>agreements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agreements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_agreement.agreements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_agreement"
    values={[
        { label: 'describe_agreement', value: 'describe_agreement' },
        { label: 'search_agreements', value: 'search_agreements' }
    ]}
>
<TabItem value="describe_agreement">

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
    <td><CopyableCode code="acceptance_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the offer was accepted or the agreement was created. AcceptanceTime and StartTime can differ for future dated agreements (FDAs).</td>
</tr>
<tr>
    <td><CopyableCode code="acceptor" /></td>
    <td><code>object</code></td>
    <td>The details of the party accepting the agreement terms. This is commonly the buyer for PurchaseAgreement.</td>
</tr>
<tr>
    <td><CopyableCode code="agreement_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agreement. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreement_type" /></td>
    <td><code>string</code></td>
    <td>The type of agreement. Values are PurchaseAgreement or VendorInsightsAgreement. (pattern: &lt;code&gt;&#91;A-Za-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the agreement ends. The field is null for pay-as-you-go agreements, which don’t have end dates.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_charges" /></td>
    <td><code>object</code></td>
    <td>The estimated cost of the agreement.</td>
</tr>
<tr>
    <td><CopyableCode code="proposal_summary" /></td>
    <td><code>object</code></td>
    <td>A summary of the proposal received from the proposer.</td>
</tr>
<tr>
    <td><CopyableCode code="proposer" /></td>
    <td><code>object</code></td>
    <td>The details of the party proposing the agreement terms. This is commonly the seller for PurchaseAgreement.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the agreement starts.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the agreement. Statuses include: ACTIVE – The terms of the agreement are active. ARCHIVED – The agreement ended without a specified reason. CANCELLED – The acceptor ended the agreement before the defined end date. EXPIRED – The agreement ended on the defined end date. RENEWED – The agreement was renewed into a new agreement (for example, an auto-renewal). REPLACED – The agreement was replaced using an agreement replacement offer. TERMINATED – The agreement ended before the defined end date because of an AWS termination (for example, a payment failure). (ACTIVE, ARCHIVED, CANCELLED, EXPIRED, RENEWED, REPLACED, ROLLED_BACK, SUPERSEDED, TERMINATED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_agreements">

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
    <td><CopyableCode code="acceptance_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the agreement was accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="acceptor" /></td>
    <td><code>object</code></td>
    <td>Details of the party accepting the agreement terms. This is commonly the buyer for PurchaseAgreement.</td>
</tr>
<tr>
    <td><CopyableCode code="agreement_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agreement. (pattern: &lt;code&gt;&#91;A-Za-z0-9_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agreement_type" /></td>
    <td><code>string</code></td>
    <td>The type of agreement. (pattern: &lt;code&gt;&#91;A-Za-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the agreement ends. The field is null for pay-as-you-go agreements, which don’t have end dates.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlements" /></td>
    <td><code>array</code></td>
    <td>A list of entitlements associated with the agreement.</td>
</tr>
<tr>
    <td><CopyableCode code="proposal_summary" /></td>
    <td><code>object</code></td>
    <td>A summary of the proposal</td>
</tr>
<tr>
    <td><CopyableCode code="proposer" /></td>
    <td><code>object</code></td>
    <td>Details of the party proposing the agreement terms, most commonly the seller for PurchaseAgreement.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the agreement starts.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the agreement. (ACTIVE, ARCHIVED, CANCELLED, EXPIRED, RENEWED, REPLACED, ROLLED_BACK, SUPERSEDED, TERMINATED)</td>
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
    <td><a href="#describe_agreement"><CopyableCode code="describe_agreement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about an agreement, such as the proposer, acceptor, start date, and end date.</td>
</tr>
<tr>
    <td><a href="#search_agreements"><CopyableCode code="search_agreements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches across all agreements that a proposer or an acceptor has in AWS Marketplace. The search returns a list of agreements with basic agreement information. The following filter combinations are supported when the PartyType is Proposer: AgreementType AgreementType + EndTime AgreementType + ResourceType AgreementType + ResourceType + EndTime AgreementType + ResourceType + Status AgreementType + ResourceType + Status + EndTime AgreementType + ResourceIdentifier AgreementType + ResourceIdentifier + EndTime AgreementType + ResourceIdentifier + Status AgreementType + ResourceIdentifier + Status + EndTime AgreementType + AcceptorAccountId AgreementType + AcceptorAccountId + EndTime AgreementType + AcceptorAccountId + Status AgreementType + AcceptorAccountId + Status + EndTime AgreementType + AcceptorAccountId + OfferId AgreementType + AcceptorAccountId + OfferId + Status AgreementType + AcceptorAccountId + OfferId + EndTime AgreementType + AcceptorAccountId + OfferId + Status + EndTime AgreementType + AcceptorAccountId + ResourceIdentifier AgreementType + AcceptorAccountId + ResourceIdentifier + Status AgreementType + AcceptorAccountId + ResourceIdentifier + EndTime AgreementType + AcceptorAccountId + ResourceIdentifier + Status + EndTime AgreementType + AcceptorAccountId + ResourceType AgreementType + AcceptorAccountId + ResourceType + EndTime AgreementType + AcceptorAccountId + ResourceType + Status AgreementType + AcceptorAccountId + ResourceType + Status + EndTime AgreementType + Status AgreementType + Status + EndTime AgreementType + OfferId AgreementType + OfferId + EndTime AgreementType + OfferId + Status AgreementType + OfferId + Status + EndTime AgreementType + OfferSetId AgreementType + OfferSetId + EndTime AgreementType + OfferSetId + Status AgreementType + OfferSetId + Status + EndTime To filter by EndTime, you can use BeforeEndTime and/or AfterEndTime. Only EndTime is supported for sorting. The following filter combinations are supported when the PartyType is Acceptor: AgreementType AgreementType + Status AgreementType + EndTime AgreementType + Status + EndTime AgreementType + ResourceIdentifier AgreementType + ResourceIdentifier + EndTime AgreementType + ResourceIdentifier + Status AgreementType + ResourceIdentifier + Status + EndTime AgreementType + ResourceType AgreementType + ResourceType + EndTime AgreementType + OfferId AgreementType + OfferId + EndTime AgreementType + OfferId + Status AgreementType + OfferId + Status + EndTime AgreementType + OfferSetId AgreementType + OfferSetId + EndTime AgreementType + OfferSetId + Status AgreementType + OfferSetId + Status + EndTime</td>
</tr>
<tr>
    <td><a href="#create_agreement_request"><CopyableCode code="create_agreement_request" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-intent"><code>intent</code></a>, <a href="#parameter-requestedTerms"><code>requestedTerms</code></a></td>
    <td></td>
    <td>Creates an agreement request that acts as a quote for the terms you want to accept. The agreement request captures the requested terms, calculates charges, and returns a summary. Use AcceptAgreementRequest with the returned agreementRequestId to finalize the agreement.</td>
</tr>
<tr>
    <td><a href="#accept_agreement_cancellation_request"><CopyableCode code="accept_agreement_cancellation_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agreementId"><code>agreementId</code></a>, <a href="#parameter-agreementCancellationRequestId"><code>agreementCancellationRequestId</code></a></td>
    <td></td>
    <td>Allows buyers (acceptors) to accept a cancellation request that is in PENDING_APPROVAL status. Once accepted, the cancellation request transitions to APPROVED status and the agreement cancellation will be processed. Only cancellation requests in PENDING_APPROVAL status can be accepted. A ConflictException is thrown if the cancellation request is in any other status.</td>
</tr>
<tr>
    <td><a href="#accept_agreement_payment_request"><CopyableCode code="accept_agreement_payment_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-paymentRequestId"><code>paymentRequestId</code></a>, <a href="#parameter-agreementId"><code>agreementId</code></a></td>
    <td></td>
    <td>Allows buyers (acceptors) to accept a payment request that is in PENDING_APPROVAL status. Once accepted, the payment request transitions to APPROVED status and the charge will be processed. Buyers can optionally provide a purchase order reference for their internal tracking. Only payment requests in PENDING_APPROVAL status can be accepted. A ConflictException is thrown if the payment request is in any other status.</td>
</tr>
<tr>
    <td><a href="#accept_agreement_request"><CopyableCode code="accept_agreement_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agreementRequestId"><code>agreementRequestId</code></a></td>
    <td></td>
    <td>Accepts an agreement request to finalize the agreement. The acceptor can optionally provide purchase orders to associate with the agreement charges.</td>
</tr>
<tr>
    <td><a href="#cancel_agreement"><CopyableCode code="cancel_agreement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agreementId"><code>agreementId</code></a></td>
    <td></td>
    <td>Allows an acceptor to cancel an active agreement. Not all agreements are eligible for cancellation. Use the error response to determine why a cancellation request was rejected.</td>
</tr>
<tr>
    <td><a href="#cancel_agreement_cancellation_request"><CopyableCode code="cancel_agreement_cancellation_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agreementId"><code>agreementId</code></a>, <a href="#parameter-agreementCancellationRequestId"><code>agreementCancellationRequestId</code></a>, <a href="#parameter-cancellationReason"><code>cancellationReason</code></a></td>
    <td></td>
    <td>Allows sellers (proposers) to withdraw an existing agreement cancellation request that is in a pending state. Once cancelled, the cancellation request transitions to CANCELLED status and can no longer be approved or rejected by the buyer. Only cancellation requests in PENDING_APPROVAL status can be cancelled. A ConflictException is thrown if the cancellation request is in any other status.</td>
</tr>
<tr>
    <td><a href="#cancel_agreement_payment_request"><CopyableCode code="cancel_agreement_payment_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-paymentRequestId"><code>paymentRequestId</code></a>, <a href="#parameter-agreementId"><code>agreementId</code></a></td>
    <td></td>
    <td>Allows sellers (proposers) to cancel a payment request that is in PENDING_APPROVAL status. Once cancelled, the payment request transitions to CANCELLED status and can no longer be accepted or rejected by the buyer. Only payment requests in PENDING_APPROVAL status can be cancelled. A ConflictException is thrown if the payment request is in any other status.</td>
</tr>
<tr>
    <td><a href="#reject_agreement_cancellation_request"><CopyableCode code="reject_agreement_cancellation_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agreementId"><code>agreementId</code></a>, <a href="#parameter-agreementCancellationRequestId"><code>agreementCancellationRequestId</code></a>, <a href="#parameter-rejectionReason"><code>rejectionReason</code></a></td>
    <td></td>
    <td>Allows buyers (acceptors) to reject a cancellation request that is in PENDING_APPROVAL status. Once rejected, the cancellation request transitions to REJECTED status and the agreement remains active. Buyers must provide a reason for the rejection. Only cancellation requests in PENDING_APPROVAL status can be rejected. A ConflictException is thrown if the cancellation request is in any other status.</td>
</tr>
<tr>
    <td><a href="#reject_agreement_payment_request"><CopyableCode code="reject_agreement_payment_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-paymentRequestId"><code>paymentRequestId</code></a>, <a href="#parameter-agreementId"><code>agreementId</code></a></td>
    <td></td>
    <td>Allows buyers (acceptors) to reject a payment request that is in PENDING_APPROVAL status. Once rejected, the payment request transitions to REJECTED status and cannot be accepted. Buyers can optionally provide a reason for the rejection. Only payment requests in PENDING_APPROVAL status can be rejected. A ConflictException is thrown if the payment request is in any other status.</td>
</tr>
<tr>
    <td><a href="#send_agreement_cancellation_request"><CopyableCode code="send_agreement_cancellation_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agreementId"><code>agreementId</code></a>, <a href="#parameter-reasonCode"><code>reasonCode</code></a></td>
    <td></td>
    <td>Allows sellers (proposers) to submit a cancellation request for an active agreement. The cancellation request is created in PENDING_APPROVAL status, at which point the buyer can review it.</td>
</tr>
<tr>
    <td><a href="#send_agreement_payment_request"><CopyableCode code="send_agreement_payment_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agreementId"><code>agreementId</code></a>, <a href="#parameter-termId"><code>termId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-chargeAmount"><code>chargeAmount</code></a></td>
    <td></td>
    <td>Allows sellers (proposers) to submit a payment request to buyers (acceptors) for a specific charge amount for an agreement that includes a VariablePaymentTerm. The payment request is created in PENDING_APPROVAL status, at which point the buyer can accept or reject it. The agreement must be active and have a VariablePaymentTerm to support payment requests. The chargeAmount must not exceed the remaining available balance under the VariablePaymentTerm maxTotalChargeAmount.</td>
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
    defaultValue="describe_agreement"
    values={[
        { label: 'describe_agreement', value: 'describe_agreement' },
        { label: 'search_agreements', value: 'search_agreements' }
    ]}
>
<TabItem value="describe_agreement">

Provides details about an agreement, such as the proposer, acceptor, start date, and end date.

```sql
SELECT
acceptance_time,
acceptor,
agreement_id,
agreement_type,
end_time,
estimated_charges,
proposal_summary,
proposer,
start_time,
status
FROM aws.marketplace_agreement.agreements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_agreements">

Searches across all agreements that a proposer or an acceptor has in AWS Marketplace. The search returns a list of agreements with basic agreement information. The following filter combinations are supported when the PartyType is Proposer: AgreementType AgreementType + EndTime AgreementType + ResourceType AgreementType + ResourceType + EndTime AgreementType + ResourceType + Status AgreementType + ResourceType + Status + EndTime AgreementType + ResourceIdentifier AgreementType + ResourceIdentifier + EndTime AgreementType + ResourceIdentifier + Status AgreementType + ResourceIdentifier + Status + EndTime AgreementType + AcceptorAccountId AgreementType + AcceptorAccountId + EndTime AgreementType + AcceptorAccountId + Status AgreementType + AcceptorAccountId + Status + EndTime AgreementType + AcceptorAccountId + OfferId AgreementType + AcceptorAccountId + OfferId + Status AgreementType + AcceptorAccountId + OfferId + EndTime AgreementType + AcceptorAccountId + OfferId + Status + EndTime AgreementType + AcceptorAccountId + ResourceIdentifier AgreementType + AcceptorAccountId + ResourceIdentifier + Status AgreementType + AcceptorAccountId + ResourceIdentifier + EndTime AgreementType + AcceptorAccountId + ResourceIdentifier + Status + EndTime AgreementType + AcceptorAccountId + ResourceType AgreementType + AcceptorAccountId + ResourceType + EndTime AgreementType + AcceptorAccountId + ResourceType + Status AgreementType + AcceptorAccountId + ResourceType + Status + EndTime AgreementType + Status AgreementType + Status + EndTime AgreementType + OfferId AgreementType + OfferId + EndTime AgreementType + OfferId + Status AgreementType + OfferId + Status + EndTime AgreementType + OfferSetId AgreementType + OfferSetId + EndTime AgreementType + OfferSetId + Status AgreementType + OfferSetId + Status + EndTime To filter by EndTime, you can use BeforeEndTime and/or AfterEndTime. Only EndTime is supported for sorting. The following filter combinations are supported when the PartyType is Acceptor: AgreementType AgreementType + Status AgreementType + EndTime AgreementType + Status + EndTime AgreementType + ResourceIdentifier AgreementType + ResourceIdentifier + EndTime AgreementType + ResourceIdentifier + Status AgreementType + ResourceIdentifier + Status + EndTime AgreementType + ResourceType AgreementType + ResourceType + EndTime AgreementType + OfferId AgreementType + OfferId + EndTime AgreementType + OfferId + Status AgreementType + OfferId + Status + EndTime AgreementType + OfferSetId AgreementType + OfferSetId + EndTime AgreementType + OfferSetId + Status AgreementType + OfferSetId + Status + EndTime

```sql
SELECT
acceptance_time,
acceptor,
agreement_id,
agreement_type,
end_time,
entitlements,
proposal_summary,
proposer,
start_time,
status
FROM aws.marketplace_agreement.agreements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agreement_request"
    values={[
        { label: 'create_agreement_request', value: 'create_agreement_request' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agreement_request">

Creates an agreement request that acts as a quote for the terms you want to accept. The agreement request captures the requested terms, calculates charges, and returns a summary. Use AcceptAgreementRequest with the returned agreementRequestId to finalize the agreement.

```sql
INSERT INTO aws.marketplace_agreement.agreements (
clientToken,
intent,
requestedTerms,
sourceAgreementIdentifier,
agreementProposalIdentifier,
taxConfiguration,
region
)
SELECT 
'{{ clientToken }}',
'{{ intent }}' /* required */,
'{{ requestedTerms }}' /* required */,
'{{ sourceAgreementIdentifier }}',
'{{ agreementProposalIdentifier }}',
'{{ taxConfiguration }}',
'{{ region }}'
RETURNING
agreement_request_id,
charge_summary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agreements
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agreements resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    - name: intent
      value: "{{ intent }}"
      description: |
        The purpose and desired outcome of the agreement request. This is a required parameter that determines how the agreement request is processed. NEW – Creates a new agreement for terms in the request. AMEND – Modifies an existing agreement with terms that are accepted in the request. REPLACE – Creates a new agreement with accepted terms and replaces the existing agreement.
      valid_values: ['NEW', 'AMEND', 'REPLACE']
    - name: requestedTerms
      description: |
        A list of terms that define what is being accepted as part of the agreement. Some terms require configuration.
      value:
        - id: "{{ id }}"
          configuration:
            configurableUpfrontPricingTermConfiguration:
              selectorValue: "{{ selectorValue }}"
              dimensions:
                - dimensionKey: "{{ dimensionKey }}"
                  dimensionValue: {{ dimensionValue }}
            renewalTermConfiguration:
              enableAutoRenew: {{ enableAutoRenew }}
            variablePaymentTermConfiguration:
              paymentRequestApprovalStrategy: "{{ paymentRequestApprovalStrategy }}"
              expirationDuration: "{{ expirationDuration }}"
    - name: sourceAgreementIdentifier
      value: "{{ sourceAgreementIdentifier }}"
      description: |
        The agreement's identifier that the request acts upon. This parameter is required for all non-NEW intents (i.e., AMEND or REPLACE). Don't provide this parameter if the intent is NEW.
    - name: agreementProposalIdentifier
      value: "{{ agreementProposalIdentifier }}"
      description: |
        The agreement proposal signed by the proposer. The proposal includes the requested resources and the terms that outline an agreement outcome. This parameter is required if the intent is not AMEND.
    - name: taxConfiguration
      description: |
        Configuration for tax estimation in the agreement request response.
      value:
        taxEstimation: "{{ taxEstimation }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_agreement_cancellation_request"
    values={[
        { label: 'accept_agreement_cancellation_request', value: 'accept_agreement_cancellation_request' },
        { label: 'accept_agreement_payment_request', value: 'accept_agreement_payment_request' },
        { label: 'accept_agreement_request', value: 'accept_agreement_request' },
        { label: 'cancel_agreement', value: 'cancel_agreement' },
        { label: 'cancel_agreement_cancellation_request', value: 'cancel_agreement_cancellation_request' },
        { label: 'cancel_agreement_payment_request', value: 'cancel_agreement_payment_request' },
        { label: 'reject_agreement_cancellation_request', value: 'reject_agreement_cancellation_request' },
        { label: 'reject_agreement_payment_request', value: 'reject_agreement_payment_request' },
        { label: 'send_agreement_cancellation_request', value: 'send_agreement_cancellation_request' },
        { label: 'send_agreement_payment_request', value: 'send_agreement_payment_request' }
    ]}
>
<TabItem value="accept_agreement_cancellation_request">

Allows buyers (acceptors) to accept a cancellation request that is in PENDING_APPROVAL status. Once accepted, the cancellation request transitions to APPROVED status and the agreement cancellation will be processed. Only cancellation requests in PENDING_APPROVAL status can be accepted. A ConflictException is thrown if the cancellation request is in any other status.

```sql
EXEC aws.marketplace_agreement.agreements.accept_agreement_cancellation_request 
@region='{{ region }}' --required 
@@json=
'{
"agreementId": "{{ agreementId }}", 
"agreementCancellationRequestId": "{{ agreementCancellationRequestId }}"
}'
;
```
</TabItem>
<TabItem value="accept_agreement_payment_request">

Allows buyers (acceptors) to accept a payment request that is in PENDING_APPROVAL status. Once accepted, the payment request transitions to APPROVED status and the charge will be processed. Buyers can optionally provide a purchase order reference for their internal tracking. Only payment requests in PENDING_APPROVAL status can be accepted. A ConflictException is thrown if the payment request is in any other status.

```sql
EXEC aws.marketplace_agreement.agreements.accept_agreement_payment_request 
@region='{{ region }}' --required 
@@json=
'{
"paymentRequestId": "{{ paymentRequestId }}", 
"agreementId": "{{ agreementId }}", 
"purchaseOrderReference": "{{ purchaseOrderReference }}"
}'
;
```
</TabItem>
<TabItem value="accept_agreement_request">

Accepts an agreement request to finalize the agreement. The acceptor can optionally provide purchase orders to associate with the agreement charges.

```sql
EXEC aws.marketplace_agreement.agreements.accept_agreement_request 
@region='{{ region }}' --required 
@@json=
'{
"agreementRequestId": "{{ agreementRequestId }}", 
"purchaseOrders": "{{ purchaseOrders }}"
}'
;
```
</TabItem>
<TabItem value="cancel_agreement">

Allows an acceptor to cancel an active agreement. Not all agreements are eligible for cancellation. Use the error response to determine why a cancellation request was rejected.

```sql
EXEC aws.marketplace_agreement.agreements.cancel_agreement 
@region='{{ region }}' --required 
@@json=
'{
"agreementId": "{{ agreementId }}"
}'
;
```
</TabItem>
<TabItem value="cancel_agreement_cancellation_request">

Allows sellers (proposers) to withdraw an existing agreement cancellation request that is in a pending state. Once cancelled, the cancellation request transitions to CANCELLED status and can no longer be approved or rejected by the buyer. Only cancellation requests in PENDING_APPROVAL status can be cancelled. A ConflictException is thrown if the cancellation request is in any other status.

```sql
EXEC aws.marketplace_agreement.agreements.cancel_agreement_cancellation_request 
@region='{{ region }}' --required 
@@json=
'{
"agreementId": "{{ agreementId }}", 
"agreementCancellationRequestId": "{{ agreementCancellationRequestId }}", 
"cancellationReason": "{{ cancellationReason }}"
}'
;
```
</TabItem>
<TabItem value="cancel_agreement_payment_request">

Allows sellers (proposers) to cancel a payment request that is in PENDING_APPROVAL status. Once cancelled, the payment request transitions to CANCELLED status and can no longer be accepted or rejected by the buyer. Only payment requests in PENDING_APPROVAL status can be cancelled. A ConflictException is thrown if the payment request is in any other status.

```sql
EXEC aws.marketplace_agreement.agreements.cancel_agreement_payment_request 
@region='{{ region }}' --required 
@@json=
'{
"paymentRequestId": "{{ paymentRequestId }}", 
"agreementId": "{{ agreementId }}"
}'
;
```
</TabItem>
<TabItem value="reject_agreement_cancellation_request">

Allows buyers (acceptors) to reject a cancellation request that is in PENDING_APPROVAL status. Once rejected, the cancellation request transitions to REJECTED status and the agreement remains active. Buyers must provide a reason for the rejection. Only cancellation requests in PENDING_APPROVAL status can be rejected. A ConflictException is thrown if the cancellation request is in any other status.

```sql
EXEC aws.marketplace_agreement.agreements.reject_agreement_cancellation_request 
@region='{{ region }}' --required 
@@json=
'{
"agreementId": "{{ agreementId }}", 
"agreementCancellationRequestId": "{{ agreementCancellationRequestId }}", 
"rejectionReason": "{{ rejectionReason }}"
}'
;
```
</TabItem>
<TabItem value="reject_agreement_payment_request">

Allows buyers (acceptors) to reject a payment request that is in PENDING_APPROVAL status. Once rejected, the payment request transitions to REJECTED status and cannot be accepted. Buyers can optionally provide a reason for the rejection. Only payment requests in PENDING_APPROVAL status can be rejected. A ConflictException is thrown if the payment request is in any other status.

```sql
EXEC aws.marketplace_agreement.agreements.reject_agreement_payment_request 
@region='{{ region }}' --required 
@@json=
'{
"paymentRequestId": "{{ paymentRequestId }}", 
"agreementId": "{{ agreementId }}", 
"rejectionReason": "{{ rejectionReason }}"
}'
;
```
</TabItem>
<TabItem value="send_agreement_cancellation_request">

Allows sellers (proposers) to submit a cancellation request for an active agreement. The cancellation request is created in PENDING_APPROVAL status, at which point the buyer can review it.

```sql
EXEC aws.marketplace_agreement.agreements.send_agreement_cancellation_request 
@region='{{ region }}' --required 
@@json=
'{
"agreementId": "{{ agreementId }}", 
"reasonCode": "{{ reasonCode }}", 
"clientToken": "{{ clientToken }}", 
"description": "{{ description }}"
}'
;
```
</TabItem>
<TabItem value="send_agreement_payment_request">

Allows sellers (proposers) to submit a payment request to buyers (acceptors) for a specific charge amount for an agreement that includes a VariablePaymentTerm. The payment request is created in PENDING_APPROVAL status, at which point the buyer can accept or reject it. The agreement must be active and have a VariablePaymentTerm to support payment requests. The chargeAmount must not exceed the remaining available balance under the VariablePaymentTerm maxTotalChargeAmount.

```sql
EXEC aws.marketplace_agreement.agreements.send_agreement_payment_request 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"agreementId": "{{ agreementId }}", 
"termId": "{{ termId }}", 
"name": "{{ name }}", 
"chargeAmount": "{{ chargeAmount }}", 
"description": "{{ description }}"
}'
;
```
</TabItem>
</Tabs>
